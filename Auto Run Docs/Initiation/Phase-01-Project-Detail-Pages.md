# Phase 01: Project Detail Pages with MDX

This phase adds client-side routing and rich per-project detail pages to the portfolio. Each of the four existing projects (surfsim, decoderd, ml-decoder, scholar-rag) gets its own `.mdx` file under `src/content/projects/` where content can be written in Markdown with embedded React components. The existing project cards in `Projects.tsx` become clickable links that navigate to these detail pages. By the end of this phase the portfolio will have a fully working multi-page experience running locally with `npm run dev`.

## Tasks

- [x] Install routing and MDX dependencies:
  - Run `npm install react-router-dom`
  - Run `npm install --save-dev @mdx-js/rollup @mdx-js/react`
  - Run `npm install --save-dev @types/react-router-dom` (types are bundled in react-router-dom v6+, skip if not needed)
  <!-- Done: installed react-router-dom@7.17.0, @mdx-js/rollup, @mdx-js/react. @types/react-router-dom skipped — v7 bundles its own types. -->

- [x] Configure Vite and TypeScript for MDX support:
  - In `vite.config.ts`, import `mdx` from `@mdx-js/rollup` and add it to the plugins array **before** the react plugin, with options `{ remarkPlugins: [], rehypePlugins: [] }`
  - In `tsconfig.app.json`, add `"mdx"` to `compilerOptions.include` if not already covered, and ensure `"jsx": "react-jsx"` is set
  - Add a type declaration file `src/mdx.d.ts` that declares `*.mdx` modules as `React.ComponentType<{ components?: Record<string, React.ComponentType> }>`
  <!-- Done: vite.config.ts updated with mdx() plugin before react(); tsconfig.app.json already had jsx:react-jsx and include:["src"] covers .mdx files; src/mdx.d.ts created with *.mdx module declaration. -->

- [x] Extend the Project type and data in `src/sections/Projects.tsx` to include a `slug` field:
  - Add `slug: string` to the `Project` interface
  - Add `slug` values matching the folder names: `'surfsim'`, `'decoderd'`, `'ml-decoder'`, `'scholar-rag'`
  - Export the `QUANTUM` and `AI` arrays (add `export` keyword) so `ProjectDetail` can look up metadata by slug
  <!-- Done: added slug field to Project interface and populated slug values on all four projects; exported QUANTUM and AI arrays. -->

- [ ] Create MDX content files for all four projects in `src/content/projects/`:
  - `surfsim.mdx` — GPU surface-code simulator; describe the motivation (real-time distance-21 simulation), implementation highlights (CUDA kernel design, memory layout), current status, and any links
  - `decoderd.mdx` — Low-latency decoder daemon; describe the shared-memory IPC design, Rust safety guarantees, benchmarks vs. socket-based approaches, and integration with the control stack
  - `ml-decoder.mdx` — Neural decoder; describe the GNN architecture, training regime, comparison to MWPM at various noise levels, and next steps
  - `scholar-rag.mdx` — RAG assistant over quant-ph arXiv; describe the ingestion pipeline, embedding strategy, retrieval design, and usage
  - Each file should open with a `## Overview` heading and include at least 2-3 substantive paragraphs of real technical content drawn from the one-line descriptions already in `Projects.tsx`; do NOT add frontmatter (keep it simple for now)

- [ ] Build the `ProjectDetail` page component at `src/pages/ProjectDetail.tsx`:
  - Dynamically import the MDX file using `React.lazy` and Vite's `import()` with the slug from `useParams()` — pattern: `` import(`../content/projects/${slug}.mdx`) ``
  - Wrap the lazy component in `<Suspense>` with a simple loading fallback
  - Look up the project metadata (name, badge, badgeTone, tags) from the exported `QUANTUM` and `AI` arrays by matching on `slug`
  - Render a back-link (`← Projects`) at the top that navigates to `/#projects` using a plain `<a>` tag
  - Render the project name, badge, and tags using the existing `Badge` and `Tag` components from `src/components/` (read those files first to match their prop API exactly)
  - Apply the same Sketchbook paper background and typography CSS variables (`--paper-1`, `--paper-grain`, `--font-body`, `--font-display`, `--ink-900`, etc.) that `App.tsx` already uses — check `src/styles/` to confirm available variables before writing
  - Limit prose content width to `var(--content)` and apply at least `padding: 80px 40px`
  - Handle the case where `slug` doesn't match any project by rendering a "Project not found" message with the back-link

- [ ] Make project cards clickable in `src/sections/Projects.tsx`:
  - Import `Link` from `react-router-dom`
  - Wrap each `<ProjectCard>` render in `<Link to={`/projects/${p.slug}`}>` with `style={{ textDecoration: 'none' }}` so the card's visual style is unchanged
  - Add a subtle "Read more →" text line at the bottom of `ProjectCard`'s JSX, styled in `var(--pencil-500)` and `var(--font-label)` font, so users know the cards are clickable

- [ ] Wire up routing in `src/App.tsx`:
  - Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
  - Wrap the entire return value in `<BrowserRouter>`
  - Add a `<Routes>` block: one `<Route path="/" element={<MainLayout />}>` for the existing single-page layout (move the current JSX into a `MainLayout` component inline or as a named const in the same file), and one `<Route path="/projects/:slug" element={<ProjectDetail />}>`
  - Import `ProjectDetail` from `./pages/ProjectDetail`
  - Ensure the `Nav` scroll-link anchors (`#projects`, etc.) still work when on the home route

- [ ] Run `npm run dev` and manually verify:
  - The home page renders exactly as before with no console errors
  - Clicking a project card navigates to `/projects/surfsim` (or whichever slug)
  - The detail page renders the MDX content, badge, tags, and back-link
  - The back-link returns to the home page projects section
  - Run `npm run build` to confirm TypeScript and the MDX plugin compile cleanly; fix any type errors before finishing
