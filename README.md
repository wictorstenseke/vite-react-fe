# React + Vite + TypeScript Boilerplate

<!-- PROJECT:START -->
> **Project:** Replace this block with your project name, a one-sentence description, and a link to the live app or deployment. See [docs/90-boilerplate.md](./docs/90-boilerplate.md) for the full adaptation checklist.
>
> **Project name:** `{{PROJECT_NAME}}`  
> **Owner:** `{{OWNER}}`  
> **Repo:** `{{REPO_URL}}`
<!-- PROJECT:END -->

A modern, production-ready React boilerplate with best practices built in.

## 🚀 Features

- ⚡️ **Vite (Rolldown)** — Rust-based bundler, 5-10× faster builds
- ⚛️ **React 19** with TypeScript strict mode
- 🎨 **Tailwind CSS v4** + **shadcn/ui** for styling and accessible components
- 🛣️ **TanStack Router** — type-safe file-based routing
- 🔄 **TanStack Query** — data fetching, caching, and mutations
- ✅ **Vitest** + **@testing-library/react** — fast, co-located tests
- 🔍 **ESLint** + **Prettier** — linting and formatting
- 🤖 **GitHub Actions** — CI/CD pipeline out of the box

## ⚡ Quick Start

```bash
npm install      # installs deps and generates the route tree
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check → lint → test → build
```

See **[docs/10-setup.md](./docs/10-setup.md)** for all scripts, environment variables, and troubleshooting.

## 📚 Documentation

| Document | Contents |
|----------|---------|
| [docs/00-overview.md](./docs/00-overview.md) | Repo orientation, stack summary, file map |
| [docs/10-setup.md](./docs/10-setup.md) | Install, run, build, all scripts |
| [docs/20-architecture.md](./docs/20-architecture.md) | Technical architecture, routing, data fetching |
| [docs/30-workflows.md](./docs/30-workflows.md) | CI/CD, branching strategy, PR process |
| [docs/40-decisions.md](./docs/40-decisions.md) | Architecture decision log (ADR-lite) |
| [docs/90-boilerplate.md](./docs/90-boilerplate.md) | **How to adapt this boilerplate** |
| [docs/testing.md](./docs/testing.md) | Testing guide, patterns, and best practices |
| [docs/deployment-github-pages.md](./docs/deployment-github-pages.md) | Deploying to GitHub Pages |

---

<!-- BOILERPLATE:START -->
## 🗂️ Boilerplate / Template Content

This section is for template guidance only. Delete it when you have adapted the repo for your project.

### How to adapt this boilerplate

1. **Search and replace placeholders:**
   - `{{PROJECT_NAME}}` → your project display name
   - `{{OWNER}}` → your name or organisation
   - `{{REPO_URL}}` → your repository URL
   - `{{ENVIRONMENT}}` → your deployment environment

2. **Update the project identity:**
   - `package.json` → `name`, `description`, `version`
   - `index.html` → `<title>`
   - The `<!-- PROJECT:START -->` block at the top of this README

3. **Replace placeholder application code:**
   - `src/pages/Landing.tsx` → your real landing page
   - Add your own API client in `src/lib/` and hooks in `src/hooks/`

4. **Review the docs:**
   - Fill in `docs/30-workflows.md` with your deployment details
   - Extend `docs/40-decisions.md` with your own ADRs
   - Update `docs/10-setup.md` with your actual environment variables

Full checklist: **[docs/90-boilerplate.md](./docs/90-boilerplate.md)**
<!-- BOILERPLATE:END -->

---

## 📄 License

MIT
