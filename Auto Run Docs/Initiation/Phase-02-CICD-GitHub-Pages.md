# Phase 02: CI/CD Deployment to GitHub Pages

This phase turns the portfolio into a live public website by wiring up an automated GitHub Actions pipeline that builds and deploys to GitHub Pages on every push to `main`. It also handles the SPA routing problem inherent to GitHub Pages (no server to rewrite `/projects/slug` back to `index.html`) by adding a `404.html` redirect trick. By the end of this phase, pushing any commit to `main` will automatically update the live site at `https://<username>.github.io/Portfolio/`.

## Tasks

- [x] Determine the GitHub remote URL to get the exact repository name:
  - Run `git remote get-url origin` to read the remote URL
  - Extract the repository name (the last path segment before `.git`) — this becomes the Vite `base` path
  - If no remote exists yet, use `Portfolio` as the default base name (can be corrected later when the remote is added)
  - **Result:** Remote is `https://github.com/BankNatchapol/bank-portfolio.git` → repo name is `bank-portfolio` → Vite base path: `/bank-portfolio/`

- [x] Update `vite.config.ts` to set the correct base path for GitHub Pages:
  - Add `base: '/Portfolio/'` (or the actual repo name discovered above, surrounded by `/` slashes)
  - Read the current `vite.config.ts` first to preserve the MDX plugin configuration added in Phase 01
  - Confirm `npm run build` still succeeds after this change
  - **Result:** Added `base: '/bank-portfolio/'` to `vite.config.ts`; `npm run build` succeeded and `dist/index.html` asset paths confirmed to start with `/bank-portfolio/`

- [ ] Add a `404.html` SPA redirect file to handle deep links on GitHub Pages:
  - Create `public/404.html` — GitHub Pages serves this for any path that doesn't match a static file
  - The file should contain a script that reads `window.location.pathname` and `window.location.search`, encodes the path into a query string, and redirects to `index.html?p=<encoded-path>`
  - Also add a corresponding script snippet to `index.html` (read it first) that on page load checks for `?p=` in the query string and uses `window.history.replaceState` to restore the original URL before React Router mounts — this makes deep links to `/projects/surfsim` work correctly after the redirect
  - Use the well-known `spa-github-pages` pattern (search the web or use the standard script from the GitHub Pages SPA redirect community solution)

- [ ] Create the GitHub Actions deployment workflow at `.github/workflows/deploy.yml`:
  - Trigger: `on: push: branches: [main]`
  - Permissions block: `contents: write` (needed to push to gh-pages branch)
  - Single job `deploy` running on `ubuntu-latest` with these steps:
    1. `actions/checkout@v4`
    2. `actions/setup-node@v4` with `node-version: '20'` and `cache: 'npm'`
    3. `npm ci`
    4. `npm run build`
    5. `peaceiris/actions-gh-pages@v4` with `github_token: ${{ secrets.GITHUB_TOKEN }}`, `publish_dir: ./dist`, and `cname:` left empty (no custom domain)
  - Make sure the YAML indentation is valid (2-space indent throughout)

- [ ] Update `package.json` scripts and add a `.gitignore` if missing:
  - Read the current `package.json` and `.gitignore` (if it exists at the repo root)
  - Ensure `dist/` and `node_modules/` are in `.gitignore`
  - No script changes are needed if `build` already runs `tsc -b && vite build`

- [ ] Commit and verify locally:
  - Run `npm run build` one final time and confirm `dist/` is populated with `index.html`, `404.html`, and hashed JS/CSS assets
  - Check that asset paths in the built `dist/index.html` start with `/Portfolio/` (confirming the base is applied)
  - Stage all new and changed files: `.github/workflows/deploy.yml`, `public/404.html`, `index.html` (if modified), `vite.config.ts`, `package.json`, `.gitignore`
  - Create a git commit with message: `feat: add project detail pages (MDX) and GitHub Pages CI/CD`
  - Do NOT push — leave that for the user to do manually so they can confirm the GitHub remote is set up correctly
  - Print a clear final note: "Run `git push origin main` to trigger the first deployment. After the Actions workflow completes, enable GitHub Pages in the repo Settings → Pages → Source: Deploy from branch → gh-pages."
