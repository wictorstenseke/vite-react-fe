# Overview

<!-- BOILERPLATE:START -->
> **Boilerplate notice:** This file contains template content. Replace `{{PROJECT_NAME}}`, `{{OWNER}}`, and `{{REPO_URL}}` with your project's actual values. Remove this notice when done.
<!-- BOILERPLATE:END -->

## What is this repository?

<!-- BOILERPLATE:START -->
**{{PROJECT_NAME}}** is built on a modern React + Vite + TypeScript boilerplate maintained by **{{OWNER}}**.
Replace this paragraph with a short description of what your project actually does.
<!-- BOILERPLATE:END -->

This boilerplate provides a production-ready foundation for React single-page applications with the following stack pre-configured and ready to use:

- **React 19** with TypeScript strict mode
- **Vite (Rolldown)** – Rust-based bundler for fast builds
- **Tailwind CSS v4** + **shadcn/ui** for styling and UI components
- **TanStack Router** (file-based, type-safe) + **TanStack Query** for data fetching
- **Vitest** + **@testing-library/react** for testing
- **ESLint** + **Prettier** for code quality
- **GitHub Actions** CI/CD pipeline

## Quick orientation

| Path | Purpose |
|------|---------|
| `src/routes/` | File-based page routes (TanStack Router) |
| `src/components/` | Reusable UI components (shadcn/ui in `ui/`) |
| `src/hooks/` | Custom React hooks (data fetching etc.) |
| `src/lib/` | API client, Query client config, utilities |
| `src/pages/` | Page-level components |
| `src/types/` | Shared TypeScript types |
| `docs/` | Project documentation (this folder) |
| `.github/workflows/` | CI/CD pipeline definitions |

## Where to go next

- **Getting started / setup** → [docs/10-setup.md](./10-setup.md)
- **Architecture details** → [docs/20-architecture.md](./20-architecture.md)
- **CI/CD & branching** → [docs/30-workflows.md](./30-workflows.md)
- **Decision log** → [docs/40-decisions.md](./40-decisions.md)
- **Adapting this boilerplate** → [docs/90-boilerplate.md](./90-boilerplate.md)
- **Testing guide** → [docs/testing.md](./testing.md)
- **Deployment (GitHub Pages)** → [docs/deployment-github-pages.md](./deployment-github-pages.md)
