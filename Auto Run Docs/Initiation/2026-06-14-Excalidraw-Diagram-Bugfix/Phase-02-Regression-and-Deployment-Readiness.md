# Phase 02: Regression and Deployment Readiness

This phase turns the diagram fix into a durable portfolio behavior. It adds focused regression coverage and production-readiness checks so future MDX pages, diagram assets, and GitHub Pages base-path changes are less likely to reintroduce the same crash or 404.

## Tasks

- [x] Add focused automated coverage for MDX project rendering:
  - Inspect the repo for the existing test setup before adding dependencies; reuse any established test runner, browser test pattern, or script conventions
  - If no test setup exists, add the smallest practical React/Vite-compatible setup for route-level rendering tests
  - Cover `ProjectDetail` rendering with a known project slug and verify custom MDX components are provided without throwing
  - Cover an unknown project slug and verify the existing “Project not found” fallback still renders
  - **Done:** No existing test setup found (playwright was installed as a dep but had no test files). Added Vitest + @testing-library/react + jsdom (3 devDependencies). Created `vitest.config.ts` (extends vite config so MDX plugin is reused), updated `tsconfig.node.json` to include the new config, added `”test”: “vitest run”` script to `package.json`. Tests in `src/__tests__/ProjectDetail.test.tsx` cover: (1) known slug `check-id` — project name/year render immediately, Suspense resolves to mocked MDX content, `Diagram` component is confirmed present in the `components` prop; (2) unknown slug — “Project not found” h1 and the slug display in the `<code>` element both render. Both tests pass; `tsc -b` is clean.

- [x] Add focused coverage for `Diagram` URL handling and failure states:
  - Test or otherwise verify that root-relative public asset paths are resolved through `import.meta.env.BASE_URL`
  - Verify absolute external URLs are not incorrectly prefixed
  - Verify fetch failures render the inline error state and do not throw an uncaught exception
  - Keep mocks local to the test file or nearest test helper so production code remains simple
  - **Done:** Added `src/__tests__/Diagram.test.tsx` with 6 tests (all local mocks, no production code changes). URL-resolution suite uses `vi.stubEnv('BASE_URL', '/portfolio/')` + a `fetch` spy to assert: (1) root-relative `/diagrams/foo.excalidraw` is fetched as `/portfolio/diagrams/foo.excalidraw`; (2) already-prefixed paths are not double-prefixed; (3) absolute `https://` URLs pass through unchanged. Failure suite asserts: (4) 404 response renders "✏️ diagram coming soon"; (5) network error renders the "Could not load diagram:" inline error span without throwing; (6) non-ok non-404 response renders the same inline error. `@excalidraw/excalidraw` is mocked via `vi.mock`; `URL.createObjectURL/revokeObjectURL` are stubbed at module scope since jsdom omits them. All 8 tests (6 new + 2 existing) pass.

- [x] Add a lightweight production-route smoke check:
  - Reuse existing scripts or add one minimal script that builds the app, serves `dist`, and checks `/projects/check-id` under the configured base path
  - The smoke check should fail if the route returns a 404, if the built page reports the missing `Diagram` component error, or if the diagram asset cannot be fetched
  - Keep the smoke check deterministic and runnable locally without GitHub credentials
  - Document the command in `package.json` scripts or an existing developer-facing file only if that matches current repo conventions
  - **Done:** Created `scripts/smoke.mjs` — a standalone Node.js script (no extra deps beyond those already installed). Three checks: (1) static bundle check — scans `dist/assets/*.js` for the `Diagram` symbol to confirm it is wired into the MDX component map; (2) HTTP route check — spawns `vite preview`, fetches `/projects/check-id`, asserts HTTP 200 and SPA shell HTML; (3) diagram asset check — fetches `/diagrams/check-id.excalidraw`, asserts HTTP 200 and valid excalidraw JSON with `elements` array. Added `"smoke": "node scripts/smoke.mjs"` and `"smoke:ci": "npm run build && node scripts/smoke.mjs"` to `package.json`. Also fixed a pre-existing TypeScript error in `Diagram.test.tsx` (`global` → `globalThis`, which is properly typed in both browser and Node environments). All 8 Vitest tests still pass; `npm run smoke` exits 0 with "All smoke checks passed."

- [ ] Verify GitHub Pages configuration matches the fixed asset strategy:
  - Inspect `.github/workflows/`, `public/404.html`, `vite.config.ts`, and any deployment notes before changing deployment behavior
  - Confirm `base` is set to the repository path expected by the published site, and that local verification uses the same base
  - Confirm SPA deep links like `/projects/check-id` continue to work with `404.html`
  - Make the smallest necessary deployment-config change if the current config disagrees with the published GitHub Pages URL

- [ ] Run the complete regression suite and final local production verification:
  - Run formatting or linting only if scripts already exist or were added in this phase
  - Run all relevant tests and the production smoke check
  - Run the final build command and preview the built site
  - Verify `check-id` renders its overview, diagram caption, and diagram area without console errors
  - Verify at least one older project page still renders, and verify the home page project cards still navigate to project detail routes
