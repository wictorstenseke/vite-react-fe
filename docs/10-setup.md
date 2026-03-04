# Setup

This document covers everything needed to install, run, and build the project locally.

## Prerequisites

- **Node.js** 20 or later (LTS recommended)
- **npm** 10 or later (bundled with Node.js)
- A code editor – [VS Code](https://code.visualstudio.com/) is recommended (settings pre-configured)

## Install dependencies

```bash
npm install
```

The `prepare` script automatically generates the TanStack Router route tree after installation.

## Start the development server

```bash
npm run dev
```

The app is available at `http://localhost:5173` by default.

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_BASE_URL` | `https://api.example.com` | Base URL for your API client (set in `src/lib/`) |
| `BASE_PATH` | `/` | Base path for asset/route resolution (needed for subdirectory deploys) |

Create a `.env.local` file in the project root to override defaults locally:

```bash
VITE_API_BASE_URL=https://api.example.com
```

## Build for production

```bash
npm run build
```

This runs type checking, linting, and tests before producing the final bundle in `dist/`.

## Preview the production build

```bash
npm run preview
```

## All available scripts

### Development

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |

### Building

| Script | Description |
|--------|-------------|
| `npm run build` | Full production build (type-check → lint → test → build) |
| `npm run preview` | Preview production build locally |

### Type checking & linting

| Script | Description |
|--------|-------------|
| `npm run generate:routes` | Generate TanStack Router route tree |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without modifying files |

### Testing

| Script | Description |
|--------|-------------|
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

### Quality checks

| Script | Description |
|--------|-------------|
| `npm run ci` | Run type-check + lint + tests (used in CI) |
| `npm run check` | Alias for `ci` |
| `npm run check:full` | Run all checks including build |

## VS Code setup

Recommended extensions are listed in `.vscode/extensions.json` and are auto-suggested when you open the project. Pre-configured settings include:

- Format on save (Prettier)
- Auto-fix ESLint on save
- Consistent line endings

## Troubleshooting

### Route tree not found

If you see `Cannot find module './routeTree.gen'`:

1. Run `npm install` (the `prepare` script generates the route tree)
2. Or run `npm run generate:routes` manually

The file `src/routeTree.gen.ts` is git-ignored and generated fresh in each environment.

### Port already in use

Vite will automatically try the next available port. Check the terminal output for the actual URL.
