# Phase 01: Working Diagram Prototype

This phase fixes the production crash on the `check-id` project page and proves the Excalidraw integration works in a production-style local preview. It focuses only on the known GitHub Pages bug: MDX must receive the `Diagram` component, and the diagram asset path must resolve correctly when the site is served from a non-root base path.

## Tasks

- [x] Reproduce and inspect the current `check-id` diagram failure locally before editing:
  - Read `src/pages/ProjectDetail.tsx`, `src/components/Diagram.tsx`, `src/content/projects/check-id.mdx`, `src/mdx.d.ts`, `vite.config.ts`, and `package.json`
  - Search the repo for existing MDX component mapping patterns, `Diagram` usage, and public asset path handling before creating any new implementation
  - Run the existing build command from `package.json` and note whether the failure is type/build/runtime-only
  - Start a local preview after building and open the `check-id` project route using the same base-path shape expected on GitHub Pages, then confirm whether the page crashes, the diagram fetch 404s, or both
  - Notes:
    - No `CLAUDE.md` was present in the repo root.
    - Inspected the requested files. `ProjectDetail` currently imports `Diagram` and passes it through the `PROSE` components map via `<MdxContent components={PROSE} />`; no existing `MDXProvider` pattern was found. `check-id.mdx` is the only current `Diagram` usage and uses the root-relative path `/diagrams/check-id.excalidraw`. `vite.config.ts` currently sets `base: '/'`, and `App.tsx` uses `BrowserRouter basename={import.meta.env.BASE_URL}`.
    - `npm run build` passed, so the observed issue is not a TypeScript or production build failure.
    - Root preview at `/projects/check-id` rendered `check-id`, `System Diagram`, and the Excalidraw canvas; `/diagrams/check-id.excalidraw` returned 200.
    - GitHub Pages-shaped verification with a `/Portfolio/` base rendered the project MDX content and did not show `Expected component Diagram to be defined`, but the diagram request went to `/diagrams/check-id.excalidraw` and returned 404. The page stayed up and showed the inline `Could not load diagram` fallback.

- [ ] Fix MDX custom component injection for project pages:
  - Ensure every MDX project page rendered by `ProjectDetail` receives a `components` map containing `Diagram`
  - If the current direct `<MdxContent components={PROSE} />` call is not enough for compiled MDX output, adapt the implementation using the established `@mdx-js/react` provider pattern rather than duplicating per-page imports
  - Keep all existing prose component overrides intact and preserve the current Sketchbook styling
  - Update TypeScript declarations only if needed so MDX components compile cleanly without weakening types across the app

- [ ] Fix the Excalidraw asset URL so it works under GitHub Pages and local preview:
  - Replace the hard-coded root-relative diagram path in `src/content/projects/check-id.mdx` or normalize it inside `Diagram.tsx` so `/diagrams/check-id.excalidraw` resolves under `import.meta.env.BASE_URL`
  - Prefer a reusable helper in `Diagram.tsx` if that keeps future diagram MDX files simple and prevents repeated base-path mistakes
  - Preserve support for absolute external URLs and already-correct relative paths if the component may need them later
  - Verify `public/diagrams/check-id.excalidraw` is still the source asset and do not move it unless the existing Vite public asset pattern requires it

- [ ] Make the diagram render robustly instead of taking down the whole project page:
  - Keep the existing loading state while the Excalidraw JSON is fetched
  - Ensure fetch failures show the existing inline “Could not load diagram” state rather than throwing an uncaught render error
  - If Excalidraw itself fails to lazy-load, add a small component-level error boundary or equivalent local fallback so the rest of the MDX page still renders
  - Avoid broad app-level error handling unless the local component cannot reasonably contain the failure

- [ ] Run production-style verification and fix any failures:
  - Run the TypeScript/build command from `package.json`
  - Start a local preview server from the built `dist` output
  - Open the `check-id` route in a browser automation tool or local browser and verify the page title/content, `System Diagram` heading, and visible Excalidraw canvas/diagram area render without the `Expected component Diagram to be defined` error
  - Confirm the diagram asset request returns 200, not 404, when served under the configured Vite base path
  - Also spot-check one existing MDX project route, such as `surfsim`, to make sure the shared MDX renderer still works
