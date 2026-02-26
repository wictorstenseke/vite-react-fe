# Workflows

This document covers the CI/CD pipeline, branching strategy, and pull request process.

## CI/CD pipeline

The GitHub Actions workflow is defined in `.github/workflows/ci.yml`.

### Triggers

- `push` to `main`, `master`, or `develop`
- `pull_request` targeting those branches

### Steps

1. **Type checking** – `npm run type-check`
2. **Linting** – `npm run lint`
3. **Tests** – `npm test`
4. **Build** – `npm run build`

All steps must pass before a PR can be merged.

### Running the full check locally

```bash
npm run check:full
```

This mirrors what CI runs and catches issues before pushing.

## Deployment

### GitHub Pages

See [docs/deployment-github-pages.md](./deployment-github-pages.md) for a step-by-step guide to deploying to GitHub Pages, including subdirectory deployments and client-side routing configuration.

<!-- BOILERPLATE:START -->
### {{ENVIRONMENT}} deployment

> Replace this section with details about your actual deployment target (e.g., Vercel, AWS, Azure, Fly.io).
> Include environment-specific configuration, secrets, and rollback procedures.
<!-- BOILERPLATE:END -->

## Branching strategy

<!-- BOILERPLATE:START -->
> This section contains a suggested branching strategy. Adapt it to match your team's workflow.
<!-- BOILERPLATE:END -->

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code |
| `develop` | Integration branch (optional) |
| `feature/<name>` | New features |
| `fix/<name>` | Bug fixes |
| `chore/<name>` | Non-functional changes (docs, config) |

Branches are merged via pull request after CI passes.

## Pull request process

1. Create a branch from `main` (or `develop`) with a descriptive name.
2. Make focused commits with clear messages.
3. Open a PR with a description explaining *what* and *why*.
4. Ensure all CI checks pass.
5. Request a review from at least one team member.
6. Merge using **squash merge** to keep history clean (recommended).

## Commit message convention

<!-- BOILERPLATE:START -->
> Adopt a convention that suits your team. A common choice is [Conventional Commits](https://www.conventionalcommits.org/).
<!-- BOILERPLATE:END -->

Suggested prefix format:

```
feat: add user authentication
fix: resolve token expiry edge case
chore: update dependencies
docs: add architecture overview
test: add unit tests for api client
```
