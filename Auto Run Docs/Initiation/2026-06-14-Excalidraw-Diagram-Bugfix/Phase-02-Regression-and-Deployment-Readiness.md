# Phase 02: Regression and Deployment Readiness

This phase turns the diagram fix into a durable portfolio behavior. It adds focused regression coverage and production-readiness checks so future MDX pages, diagram assets, and GitHub Pages base-path changes are less likely to reintroduce the same crash or 404.

## Tasks

- [x] Add focused automated coverage for MDX project rendering:
  - Inspect the repo for the existing test setup before adding dependencies; reuse any established test runner, browser test pattern, or script conventions
  - If no test setup exists, add the smallest practical React/Vite-compatible setup for route-level rendering tests
  - Cover `ProjectDetail` rendering with a known project slug and verify custom MDX components are provided without throwing
  - Cover an unknown project slug and verify the existing “Project not found” fallback still renders
  - **Done:** No existing test setup found (playwright was installed as a dep but had no test files). Added Vitest + @testing-library/react + jsdom (3 devDependencies). Created `vitest.config.ts` (extends vite config so MDX plugin is reused), updated `tsconfig.node.json` to include the new config, added `”test”: “vitest run”` script to `package.json`. Tests in `src/__tests__/ProjectDetail.test.tsx` cover: (1) known slug `check-id` — project name/year render immediately, Suspense resolves to mocked MDX content, `Diagram` component is confirmed present in the `components` prop; (2) unknown slug — “Project not found” h1 and the slug display in the `<code>` element both render. Both tests pass; `tsc -b` is clean.

- [ ] Add focused coverage for `Diagram` URL handling and failure states:
  - Test or otherwise verify that root-relative public asset paths are resolved through `import.meta.env.BASE_URL`
  - Verify absolute external URLs are not incorrectly prefixed
  - Verify fetch failures render the inline error state and do not throw an uncaught exception
  - Keep mocks local to the test file or nearest test helper so production code remains simple

- [ ] Add a lightweight production-route smoke check:
  - Reuse existing scripts or add one minimal script that builds the app, serves `dist`, and checks `/projects/check-id` under the configured base path
  - The smoke check should fail if the route returns a 404, if the built page reports the missing `Diagram` component error, or if the diagram asset cannot be fetched
  - Keep the smoke check deterministic and runnable locally without GitHub credentials
  - Document the command in `package.json` scripts or an existing developer-facing file only if that matches current repo conventions

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
