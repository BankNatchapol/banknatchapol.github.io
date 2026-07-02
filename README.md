# Natchapol Patamawisut Portfolio

Personal portfolio site for **Natchapol Patamawisut**. It presents research areas, AI and quantum projects, publications, awards, experience, and contact details in a hand-drawn notebook style.

**Live site:** https://banknatchapol.github.io/

## Tech Stack

| Layer | Tool |
| --- | --- |
| App | React 18 + TypeScript |
| Bundler | Vite |
| Routing | React Router |
| Content | MDX project detail pages |
| Diagrams | Excalidraw JSON exported to SVG at runtime |
| Metadata | react-helmet-async |
| Styling | CSS custom properties + global responsive CSS |
| Tests | Vitest + Testing Library + jsdom |
| Smoke checks | Vite preview + Node fetch checks |
| Deploy | GitHub Actions -> GitHub Pages |

## Project Structure

```text
src/
├── components/          # Design primitives and rich content components
├── content/projects/    # MDX detail pages, one file per project slug
├── data/                # Supporting datasets for project pages
├── hooks/               # Small UI hooks
├── pages/               # Route-level pages
├── sections/            # Homepage sections
├── styles/              # Global tokens, fonts, effects, responsive rules
├── site.config.ts       # Main editable site content
└── App.tsx              # Router and page composition

public/
├── diagrams/            # Excalidraw source files used by MDX pages
├── 404.html             # GitHub Pages SPA fallback
├── sitemap.xml
├── robots.txt
└── profile.jpg
```

## Available Scripts

```bash
npm install
npm run dev        # Start Vite dev server
npm run test       # Run Vitest tests
npm run build      # Type-check and build production assets
npm run preview    # Preview the production build
npm run smoke      # Smoke-test an existing dist/ build
npm run smoke:ci   # Build, then run smoke checks
```

## Content Model

Most site content lives in [src/site.config.ts](src/site.config.ts). Updating personal details, research areas, projects, publications, awards, experience, skills, and links there updates the rendered site.

Project detail pages are routed by slug:

```text
/projects/:slug
```

Each project entry in `src/site.config.ts` should have a matching MDX file:

```text
src/content/projects/<slug>.mdx
```

Current project slugs:

| Slug | Project |
| --- | --- |
| `dqi-circuit` | DQI-Circuit |
| `qiix` | Qiix |
| `check-id` | ID Checker |
| `deep-asr-pipeline` | Deep Speech Data Pipeline |
| `phonetic-alignment` | Phonetic Alignment |
| `thai-tts` | Thai High-Naturalness TTS |
| `deep-wordseg` | Deep Thai Word Segmentation |
| `thai-g2p` | Deep Thai Phonemizer |
| `virtual-soul` | VirtualSoul |
| `ai-novel-writer` | AI Novel Writer |

MDX pages can use custom components provided by [src/pages/ProjectDetail.tsx](src/pages/ProjectDetail.tsx), including:

- `Diagram`
- `HandwrittenLineChart`

Diagram files are stored in `public/diagrams/` and referenced from MDX with paths such as:

```mdx
<Diagram src="/diagrams/check-id.excalidraw" caption="ID verification pipeline" />
```

## Routing and GitHub Pages

The app uses `BrowserRouter` with Vite's `BASE_URL`. The current Vite base is `/`, matching the GitHub Pages user-site URL:

```text
https://banknatchapol.github.io/
```

`public/404.html` implements the usual SPA redirect fallback so deep links such as `/projects/check-id` can recover on GitHub Pages.

## Testing and Smoke Checks

The Vitest suite currently covers:

- Excalidraw diagram URL resolution and failure states.
- Project detail rendering and MDX component wiring.

The smoke script checks a built app by starting `vite preview` and verifying:

- `/projects/check-id` serves the SPA shell.
- `/diagrams/check-id.excalidraw` is reachable and valid JSON.
- The `Diagram` symbol is present in the built JS bundle.

## Deployment

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

```text
npm ci
npm run build
publish dist/ to gh-pages
```

The workflow publishes the production build to GitHub Pages using `peaceiris/actions-gh-pages`.

## Local Generated Files

`Auto Run Docs/` is intentionally ignored and should not be committed. It is reserved for local generated notes, screenshots, and temporary working artifacts.
