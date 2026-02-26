# Decision Log

This document records key technical decisions made for this project. Each entry follows a lightweight ADR (Architecture Decision Record) format.

<!-- BOILERPLATE:START -->
> **Boilerplate notice:** The entries below document decisions made for this boilerplate. When you adopt this repo for a real project, add your own entries and remove or keep the boilerplate ones as you see fit.
<!-- BOILERPLATE:END -->

---

## ADR-001: Vite (Rolldown) as the build tool

**Status:** Accepted  
**Date:** 2024

**Context:** The project needed a fast, modern build tool with excellent React and TypeScript support.

**Decision:** Use `rolldown-vite` (aliased as `vite`), the experimental Rust-based bundler that is 5-10× faster than the default JavaScript bundler. It provides an identical API to standard Vite and is a drop-in replacement.

**Consequences:**
- Significantly faster build and HMR times.
- Rolldown is experimental; monitor for breaking changes when upgrading Vite.

---

## ADR-002: TanStack Router over React Router

**Status:** Accepted  
**Date:** 2024

**Context:** A routing solution with strong TypeScript support was needed.

**Decision:** Use TanStack Router for its end-to-end type safety, file-based routing, and automatic route tree generation via the Vite plugin.

**Consequences:**
- Route params and search params are fully typed with no additional boilerplate.
- The generated `src/routeTree.gen.ts` is git-ignored and regenerated in each environment.

---

## ADR-003: Co-located tests

**Status:** Accepted  
**Date:** 2024

**Context:** A decision was needed on where to place test files.

**Decision:** Co-locate test files with the code they test using `.test.tsx` / `.test.ts` extensions.

**Consequences:**
- Tests are easy to find alongside their source files.
- Importing tested modules uses short relative paths.
- Test files are excluded from the production bundle by Vitest configuration.

---

## ADR-004: shadcn/ui component ownership model

**Status:** Accepted  
**Date:** 2024

**Context:** A UI component library was needed that allows full customisation without fighting the library.

**Decision:** Use shadcn/ui. Components are copied into `src/components/ui/` via the CLI and are owned by the project, not installed as an opaque npm dependency.

**Consequences:**
- Components can be freely modified.
- Upgrades are opt-in and applied manually via the CLI.

---

<!-- BOILERPLATE:START -->
## ADR-NNN: {{DECISION_TITLE}}

**Status:** Proposed | Accepted | Deprecated | Superseded  
**Date:** {{DATE}}

**Context:** _What situation or problem prompted this decision?_

**Decision:** _What was decided?_

**Consequences:** _What are the trade-offs, risks, or follow-up actions?_
<!-- BOILERPLATE:END -->
