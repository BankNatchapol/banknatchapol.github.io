import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Diagram } from '../components/Diagram'
import { ProjectDetail } from '../pages/ProjectDetail'

type AnyComponents = Record<string, unknown>

let capturedComponents: AnyComponents | undefined

vi.mock('../content/projects/check-id.mdx', () => ({
  default: ({ components }: { components?: AnyComponents }) => {
    capturedComponents = components
    return <div data-testid="mdx-content">Mock MDX content</div>
  },
}))

function renderWithSlug(slug: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[`/projects/${slug}`]}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('ProjectDetail', () => {
  beforeEach(() => {
    capturedComponents = undefined
  })

  it('renders project metadata and provides custom MDX components for a known slug', async () => {
    renderWithSlug('check-id')

    // Project heading and year render immediately (before MDX loads)
    screen.getByText('ID Checker')
    screen.getByText('2026')

    // Suspense resolves and MDX mock renders
    await waitFor(() => screen.getByTestId('mdx-content'))

    // The Diagram component is passed in the components prop — not undefined, not a stub
    expect(capturedComponents?.['Diagram']).toBe(Diagram)
  })

  it('renders "Project not found" fallback for an unknown slug', () => {
    renderWithSlug('does-not-exist')

    screen.getByText('Project not found')
    screen.getByText('"does-not-exist"')
  })
})
