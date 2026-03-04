# Boilerplate Guide

This document is the single source of truth for adapting this boilerplate to a new project. Follow the checklist below to turn the template into your own application.

## Placeholder reference

Search and replace these strings throughout the repository:

| Placeholder | Replace with |
|------------|-------------|
| `{{PROJECT_NAME}}` | Your project's display name |
| `{{OWNER}}` | Your name or organisation |
| `{{REPO_URL}}` | Full URL of your GitHub repository |
| `{{ENVIRONMENT}}` | Your deployment environment name (e.g., `Production`, `Staging`) |

## Adapt the boilerplate – checklist

### 1. Repository and package identity

- [ ] Update `name`, `description`, and `version` in `package.json`
- [ ] Update the `<title>` tag in `index.html`
- [ ] Replace `{{PROJECT_NAME}}` and `{{OWNER}}` in `README.md` and `docs/00-overview.md`
- [ ] Update or remove `LICENSE` if applicable

### 2. README.md

- [ ] Fill in the **Project intro** section under `<!-- PROJECT:START -->` with a real description
- [ ] Remove or update the **Boilerplate/Template Content** section (`<!-- BOILERPLATE:START -->` … `<!-- BOILERPLATE:END -->`)
- [ ] Verify all links to `/docs` files are correct after any renames

### 3. /docs folder

- [ ] `docs/00-overview.md` – replace placeholder text, update the stack table if you add/remove tools
- [ ] `docs/10-setup.md` – update environment variables section with your actual variables
- [ ] `docs/20-architecture.md` – extend with your project's real architecture decisions
- [ ] `docs/30-workflows.md` – fill in the `{{ENVIRONMENT}}` deployment section; update branching strategy to match your team's workflow
- [ ] `docs/40-decisions.md` – remove boilerplate ADR entries you don't need; add your own
- [ ] `docs/90-boilerplate.md` (this file) – delete or repurpose once adaptation is complete
- [ ] Optional: rename numbered files if the numbering scheme doesn't suit your project

### 4. Application code

- [ ] Replace or remove `src/pages/Landing.tsx` with your actual landing page
- [ ] Add your own API client in `src/lib/` and register it with TanStack Query hooks in `src/hooks/`
- [ ] Remove example route files in `src/routes/` that are not part of your application

### 5. CI/CD

- [ ] Review `.github/workflows/ci.yml` and update branch triggers if needed
- [ ] Add deployment workflow(s) – see `docs/deployment-github-pages.md` for a GitHub Pages example
- [ ] Add any required secrets to your GitHub repository settings

### 6. Configuration

- [ ] Update `VITE_API_BASE_URL` default in `docs/10-setup.md` and any `.env.example` file
- [ ] Review `src/lib/queryClient.ts` defaults and adjust `staleTime`, `gcTime`, and `retry` to match your API behaviour
- [ ] Optionally add a `.env.example` file documenting all required environment variables

## Removing boilerplate markers

Once you have customised the repository, you can clean up the boilerplate markers:

```bash
# Find all remaining boilerplate blocks
grep -rn "BOILERPLATE:START" .

# Find all remaining placeholders
grep -rn "{{" . --include="*.md"
```

Remove or replace everything flagged by those searches before shipping to production.

## What to keep

The following are not boilerplate — they are reusable infrastructure you should keep:

- `src/lib/queryClient.ts` (TanStack Query config)
- `src/lib/utils.ts` (`cn` utility)
- `src/test/utils.tsx` (test helpers)
- `src/components/layout/AppShell.tsx` (layout shell)
- `.cursor/rules/` (AI coding rules)
- `.github/workflows/ci.yml` (CI pipeline)
- All shadcn/ui components in `src/components/ui/`
