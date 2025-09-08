Design improvements applied (summary)

Files changed:
- src/app/globals.css
  - Added `.container`, typography helpers, `.btn-elevated` and other utilities.
- src/components/Header.tsx
  - Glass-like translucent header, container usage, improved spacing and nav links.
- src/components/Hero.tsx
  - Rewrapped with `.container`, improved CTA styling (.btn-elevated), refined flip card size and shadows.
- src/components/ProjectCard.tsx
  - Improved card accessibility (tabIndex/role), added small footer action area and adjusted image placeholder.
- src/app/projects/page.tsx
  - Updated grid to support 4 columns at xl, container usage, and a small filter button.

How to test locally

1) Install dependencies (if needed):

```bash
npm install
```

2) Run development server:

```bash
npm run dev
# open http://localhost:3000
```

3) Build to verify types and production compile:

```bash
npm run build
```

Notes on Codacy and CI

- Changes must be analyzed by Codacy CLI as required by the repo MCP instructions. If you run the project on Windows, use WSL or a Linux/macos environment to run the Codacy CLI.
- If Codacy CLI is not available locally, run the MCP/extension check in VS Code or consult your organization settings for MCP servers.

How to open a PR (recommended)

1) Create a branch:

```bash
git checkout -b feat/design-updates
```

2) Commit changes:

```bash
git add .
git commit -m "chore: design improvements — header, hero, project grid"
```

3) Push branch:

```bash
git push -u origin feat/design-updates
```

4) Create a PR from GitHub UI comparing `feat/design-updates` -> `main` and include this README-design.md as description.

If you want, I can create the branch and open the PR for you (I will need permission to push). Otherwise, follow the steps above.
