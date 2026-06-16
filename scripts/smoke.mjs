#!/usr/bin/env node
/**
 * Production-route smoke check.
 *
 * Run after a fresh build:
 *   npm run build && npm run smoke
 *   -- or --
 *   npm run smoke:ci     (builds first, then checks)
 *
 * Checks three things that guard the Excalidraw diagram fix:
 *   1. /projects/check-id is served (not a 404) by the built SPA
 *   2. The diagram asset /diagrams/check-id.excalidraw is reachable and valid JSON
 *   3. The Diagram component symbol is present in the built JS bundle
 *
 * Exits 0 on pass, 1 on any failure. No GitHub credentials required.
 */
import { spawn } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const BASE = 'http://localhost:4173'
const SERVER_TIMEOUT_MS = 30_000

const failures = []
const pass = (msg) => console.log(`  ✓  ${msg}`)
const fail = (msg) => { console.error(`  ✗  ${msg}`); failures.push(msg) }

async function waitForServer(url, timeout) {
  const deadline = Date.now() + timeout
  while (Date.now() < deadline) {
    try {
      await fetch(url, { signal: AbortSignal.timeout(2_000) })
      return
    } catch { /* not ready yet */ }
    await new Promise((r) => setTimeout(r, 300))
  }
  throw new Error(`Preview server not ready after ${timeout}ms — is dist/ built?`)
}

// ── Check 1: Diagram symbol in built bundle ──────────────────────────────────
console.log('\n[1] Static bundle check — Diagram component registration')
try {
  const assetsDir = join(ROOT, 'dist', 'assets')
  const files = await readdir(assetsDir)
  const jsFiles = files.filter((f) => f.endsWith('.js'))
  let found = false
  for (const f of jsFiles) {
    const src = await readFile(join(assetsDir, f), 'utf8')
    if (src.includes('Diagram')) {
      found = true
      break
    }
  }
  if (found) pass('Diagram symbol present in built JS bundle')
  else fail('Diagram symbol absent from all built JS bundle chunks — component may not be wired to MDX')
} catch (e) {
  fail(`Bundle check failed (is dist/assets/ built?): ${e.message}`)
}

// ── Checks 2 & 3: live preview server ───────────────────────────────────────
console.log('\n[2] HTTP checks via vite preview')
const server = spawn(
  'npx',
  ['vite', 'preview', '--port', '4173'],
  { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] },
)
server.on('error', (e) => { fail(`Failed to start vite preview: ${e.message}`) })

try {
  process.stdout.write('    Waiting for server… ')
  await waitForServer(`${BASE}/`, SERVER_TIMEOUT_MS)
  console.log('ready.')

  // Check 2a: SPA route returns HTML
  {
    const route = '/projects/check-id'
    const res = await fetch(`${BASE}${route}`)
    if (!res.ok) {
      fail(`${route} → HTTP ${res.status} (expected 200 — SPA shell not served)`)
    } else {
      const html = await res.text()
      if (!html.includes('<div id="root">')) {
        fail(`${route} → 200 but response does not look like the SPA shell`)
      } else {
        pass(`${route} → HTTP ${res.status} (SPA shell)`)
      }
    }
  }

  // Check 2b: diagram asset is reachable and valid excalidraw JSON
  {
    const asset = '/diagrams/check-id.excalidraw'
    const res = await fetch(`${BASE}${asset}`)
    if (!res.ok) {
      fail(`${asset} → HTTP ${res.status} (diagram asset not found)`)
    } else {
      try {
        const json = await res.json()
        if (!Array.isArray(json.elements)) {
          fail(`${asset} → 200 but JSON is missing "elements" array`)
        } else {
          pass(`${asset} → HTTP ${res.status}, valid excalidraw JSON (${json.elements.length} elements)`)
        }
      } catch {
        fail(`${asset} → 200 but response is not valid JSON`)
      }
    }
  }
} finally {
  server.kill()
}

// ── Result ───────────────────────────────────────────────────────────────────
console.log()
if (failures.length) {
  console.error(`SMOKE CHECK FAILED (${failures.length} issue${failures.length > 1 ? 's' : ''})`)
  failures.forEach((f) => console.error(`  ${f}`))
  process.exit(1)
} else {
  console.log('All smoke checks passed.')
}
