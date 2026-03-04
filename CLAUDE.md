# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # start dev server at http://localhost:5173
npm run build            # type-check → lint → test → vite build
npm run type-check       # tsr generate + tsc --noEmit
npm run lint             # ESLint
npm run lint:fix         # ESLint with auto-fix
npm run test             # run all tests once
npm run test:watch       # run tests in watch mode
npm run test:coverage    # run tests with coverage report
npm run format           # Prettier write
npm run generate:routes  # regenerate TanStack Router route tree
npm run ci               # audit + type-check + lint + test (CI gate)
```

Run a single test file:
```bash
npm test -- button.test.tsx
npm test -- --grep "increments counter"
```

## Architecture

**Stack:** React 19 + TypeScript strict + Vite (Rolldown) + Tailwind CSS v4 + shadcn/ui + TanStack Router + TanStack Query + Vitest

### Routing (TanStack Router — file-based)

- Route files live in `src/routes/` and export `Route` via `createFileRoute()`
- Page-level components live in `src/pages/`, imported by route files
- Root layout in `src/routes/__root.tsx` renders `AppShell` and all child routes
- `src/routeTree.gen.ts` is **auto-generated** — never edit manually; regenerate with `tsr generate`
- Use typed `<Link>` from `@tanstack/react-router` for internal navigation, not `<a>`

### Data Fetching (TanStack Query)

- Global `QueryClient` configured in `src/lib/queryClient.ts` (staleTime 5m, gcTime 30m, retry 1)
- Custom hooks live in `src/hooks/` following naming: `use[Entity]Query` / `use[Action][Entity]Mutation`
- Query key factories co-located with hooks (e.g., `postKeys.list()`, `postKeys.detail(id)`)
- Mutations: include optimistic updates, `onError` rollback, `onSettled` invalidation

### API Client (`src/lib/`)

- All HTTP calls go through a shared `fetchApi` wrapper
- Use `ApiException` for all transport/parsing failures with error codes: `HTTP_ERROR`, `NETWORK_ERROR`, `TIMEOUT_ERROR`, `ABORT_ERROR`, `PARSE_ERROR`, `VALIDATION_ERROR`
- Validate external API responses with Zod before returning typed data
- Group resource operations behind domain clients (e.g., `postsApi`)

### UI Components (`src/components/ui/`)

- shadcn/ui components are project-owned, not a package dependency — they can be freely modified
- Add components via CLI: `npx shadcn@latest add <component>`
- Style with `new-york` theme; uses unified `radix-ui` imports
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Icons: `lucide-react`

### Testing

- Tests are **co-located** with source files (e.g., `utils.ts` → `utils.test.ts`)
- Cross-cutting integration tests go in `src/test/`
- Key helpers in `src/test/utils.tsx`: `createTestQueryClient()`, `renderWithQueryClient()`
- Test names: `it("should [verb] when [condition]")`
- Prefer `getByRole` queries; use `userEvent.setup()` for interactions

## Code Conventions

- TypeScript strict mode; avoid `any`
- Prefer `const` arrow functions with explicit types over `function` declarations
- Use `@/*` path aliases for all imports
- Use early returns; avoid nested conditionals
- Named exports only for components (not default exports)
- Event handlers prefixed with `handle` (e.g., `handleClick`)
- Props interfaces named `ComponentNameProps`
- No inline styles — use Tailwind classes exclusively
- Do not leave TODO comments or incomplete implementations
