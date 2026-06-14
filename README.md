# Natchapol Patamawisut — Portfolio

Personal portfolio site for **Natchapol Patamawisut**, Quantum Computing Researcher (PhD candidate, IQC / MSc ETH Zürich). Built with React, TypeScript, Vite, and MDX. Deployed to GitHub Pages.

**Live site:** https://banknatchapol.github.io/bank-portfolio/

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite |
| Content | MDX (project detail pages) |
| Routing | React Router v7 |
| Styling | CSS custom properties (design tokens) |
| Deploy | GitHub Actions → GitHub Pages |

## Project Structure

```
src/
├── components/       # Design system primitives (Button, Card, Badge, …)
├── sections/         # Page sections (Hero, Projects, Research, Experience, …)
├── pages/            # Route-level pages (ProjectDetail)
├── content/
│   └── projects/     # MDX files — one per project
└── styles/           # Global CSS tokens (colors, typography, spacing, effects)
```

## Getting Started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # preview production build locally
```

## Content

Project detail pages live in `src/content/projects/` as `.mdx` files. Each file contains a prose writeup (Overview, design notes, tags) rendered by `src/pages/ProjectDetail.tsx`.

Current projects:
- **decoderd** — low-latency QEC decoder daemon using POSIX shared memory IPC (Rust)
- **ml-decoder** — machine-learning-based syndrome decoder
- **scholar-rag** — RAG pipeline for academic literature
- **surfsim** — surface code simulator

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which runs `npm ci && npm run build` and publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`.
