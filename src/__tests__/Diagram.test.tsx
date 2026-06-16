import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Diagram } from '../components/Diagram'

// Mock the heavy Excalidraw dep so SVG export doesn't crash jsdom
vi.mock('@excalidraw/excalidraw', () => ({
  exportToSvg: vi.fn().mockImplementation(() =>
    Promise.resolve(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
  ),
}))

// jsdom has no URL.createObjectURL / revokeObjectURL
globalThis.URL.createObjectURL = vi.fn().mockReturnValue('blob:test')
globalThis.URL.revokeObjectURL = vi.fn()

function fetchOk() {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ elements: [], appState: {}, files: {} }),
  })
}

function fetch404() {
  return vi.fn().mockResolvedValue({ ok: false, status: 404 })
}

function fetchError(msg = 'Network error') {
  return vi.fn().mockRejectedValue(new Error(msg))
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('Diagram URL resolution', () => {
  it('prepends BASE_URL to root-relative paths', async () => {
    vi.stubEnv('BASE_URL', '/portfolio/')
    const spy = fetchOk()
    vi.stubGlobal('fetch', spy)

    render(<Diagram src="/diagrams/foo.excalidraw" />)

    await waitFor(() => expect(spy).toHaveBeenCalledWith('/portfolio/diagrams/foo.excalidraw'))
  })

  it('does not double-prefix already-prefixed paths', async () => {
    vi.stubEnv('BASE_URL', '/portfolio/')
    const spy = fetchOk()
    vi.stubGlobal('fetch', spy)

    render(<Diagram src="/portfolio/diagrams/foo.excalidraw" />)

    await waitFor(() => expect(spy).toHaveBeenCalledWith('/portfolio/diagrams/foo.excalidraw'))
  })

  it('leaves absolute external URLs unchanged', async () => {
    vi.stubEnv('BASE_URL', '/portfolio/')
    const spy = fetchOk()
    vi.stubGlobal('fetch', spy)

    render(<Diagram src="https://example.com/diagram.excalidraw" />)

    await waitFor(() => expect(spy).toHaveBeenCalledWith('https://example.com/diagram.excalidraw'))
  })
})

describe('Diagram failure states', () => {
  it('shows "diagram coming soon" on 404 without throwing', async () => {
    vi.stubGlobal('fetch', fetch404())

    render(<Diagram src="/diagrams/missing.excalidraw" />)

    await waitFor(() => screen.getByText('✏️ diagram coming soon'))
  })

  it('shows inline error on network failure without throwing', async () => {
    vi.stubGlobal('fetch', fetchError('connection refused'))

    render(<Diagram src="/diagrams/foo.excalidraw" />)

    await waitFor(() => screen.getByText(/Could not load diagram:/))
  })

  it('shows inline error on non-ok fetch response without throwing', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }))

    render(<Diagram src="/diagrams/foo.excalidraw" />)

    await waitFor(() => screen.getByText(/Could not load diagram:/))
  })
})
