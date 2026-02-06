# React + Vite + TypeScript Boilerplate

A modern, production-ready React boilerplate with best practices built in.

## 🚀 Features

- ⚡️ **Vite (Rolldown)** - Lightning fast build tool powered by Rust-based Rolldown bundler
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible components built on Radix UI primitives
- 🛣️ **TanStack Router** - Type-safe file-based routing with auto-generated route tree
- 🔄 **TanStack Query** - Powerful data fetching and caching
- ✅ **Vitest** - Fast unit testing with coverage
- 🔍 **ESLint** - Code linting with import ordering and unused imports detection
- 💅 **Prettier** - Code formatting (integrated with ESLint)
- 🤖 **GitHub Actions** - CI/CD pipeline
- 📱 **Responsive** - Mobile-first design

### About Rolldown-Vite

This boilerplate uses [rolldown-vite](https://vite.dev/guide/migration#rolldown-migration) (aliased as `vite`), Vite's experimental Rust-based bundler that's 5-10x faster than the JavaScript bundler. It's a drop-in replacement providing identical API and significantly improved build performance.

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── AppShell.tsx      # Main layout wrapper
│   └── ui/                    # shadcn/ui components
├── pages/
│   └── Landing.tsx            # Single landing page
├── routes/                    # TanStack Router routes
│   ├── __root.tsx             # Root layout
│   └── index.tsx              # / route
├── hooks/
│   └── usePosts.ts            # Example query hooks
├── lib/
│   ├── api.ts                 # API client with fetch wrapper
│   ├── queryClient.ts         # TanStack Query configuration
│   └── utils.ts               # Utility functions
├── types/
│   └── api.ts                 # API type definitions
├── router.tsx                 # Router configuration
├── main.tsx                   # App entry point
└── index.css                  # Global styles
```

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

Build process runs type checking, linting, tests, and builds the app. Any failure stops the build.

## 📝 Available Scripts

### Development

- `npm run dev` - Start dev server with hot reload

### Building

- `npm run build` - Full production build (runs type-check, lint, test, then builds)
- `npm run preview` - Preview production build locally

### Type Checking & Linting

- `npm run generate:routes` - Generate TanStack Router route tree (auto-run by type-check)
- `npm run type-check` - Run TypeScript type checking (generates routes first)
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are formatted correctly

### Testing

- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

### Quality Checks

- `npm run ci` - Run all quality checks (type-check, lint, test) - used in CI pipeline
- `npm run check` - Alias for `ci`
- `npm run check:full` - Run all checks including build (most comprehensive)

## 🎨 Adding Components

Add shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will be installed in `src/components/ui/`.

## 🛣️ Adding Routes

TanStack Router uses file-based routing with automatic route tree generation.

1. Create a new file in `src/routes/`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return <div>About Page</div>;
}
```

2. The route tree is auto-generated:
   - TanStack Router Vite plugin watches `src/routes/` for changes
   - Generates `src/routeTree.gen.ts` automatically (git-ignored)
   - **Automatic on install**: The `prepare` script ensures route tree is generated when you run `npm install` or `npm ci`
   - No manual registration needed - just create route files and they work!

**Note:** You don't need to manually run `generate:routes` - it happens automatically during development, before type-checking, and after installing dependencies.

## 🔄 Data Fetching with TanStack Query

TanStack Query is configured with sensible defaults for automatic caching, background refetching, and optimistic updates.

### Query Configuration

The global QueryClient is configured in `src/lib/queryClient.ts`:

- **staleTime**: 5 minutes - data is fresh for this duration
- **gcTime**: 30 minutes - unused data stays in cache
- **retry**: 1 - queries retry once on failure
- **refetchOnWindowFocus**: true - refetch when window regains focus
- **refetchOnReconnect**: true - refetch when network reconnects

### Creating Query Hooks

Create custom hooks in `src/hooks/`:

```tsx
// src/hooks/usePosts.ts
import { useQuery } from "@tanstack/react-query";
import { postsApi } from "@/lib/api";

export const usePostsQuery = (params?: PaginationParams) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postsApi.getPosts(params),
  });
};
```

### Using Queries in Components

```tsx
import { usePostsQuery } from "@/hooks/usePosts";

const MyComponent = () => {
  const { data, isLoading, isError, error } = usePostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <div>{/* Render data */}</div>;
};
```

### Mutations with Optimistic Updates

```tsx
import { useUpdatePostMutation } from "@/hooks/usePosts";

const MyComponent = () => {
  const updatePost = useUpdatePostMutation();

  const handleUpdate = () => {
    updatePost.mutate({
      id: 1,
      data: { title: "Updated Title" },
    });
  };

  return <button onClick={handleUpdate}>Update</button>;
};
```

### DevTools

React Query Devtools are included in development mode. Click the floating icon to:

- Inspect query cache
- View query states
- Manually trigger refetches
- Debug query configurations

The included query hook examples in `src/hooks/usePosts.ts` are ready to adapt
to your own API resources.

## 🎯 Layout System

The `AppShell` component provides:

- Sticky header with theme toggle
- Responsive container (max-width + padding)
- Consistent spacing across the app
- Mobile-first responsive design
- Footer

The landing page uses this layout via the root route.

## 🧪 Testing

This project uses **Vitest** with **@testing-library/react** for comprehensive testing.

### Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Test Files

Create test files with `.test.tsx` or `.test.ts` extension, co-located with the code they test:

```tsx
// button.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./button";

describe("Button", () => {
  it("handles click events", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing with React Query

For components using TanStack Query, use the provided test utilities:

```tsx
import { renderWithQueryClient } from "@/test/utils";

it("fetches and displays data", async () => {
  renderWithQueryClient(<MyComponent />);
  
  await waitFor(() => {
    expect(screen.getByText("Data loaded")).toBeInTheDocument();
  });
});
```

📚 **[Complete Testing Guide](./docs/testing.md)** - Detailed testing strategies, patterns, and best practices

## 🔧 VS Code Setup

Recommended extensions (auto-suggested when opening the project):

- ESLint
- Prettier
- Tailwind CSS IntelliSense

Settings are pre-configured for:

- Format on save
- Auto-fix ESLint issues
- Consistent line endings

## 🚀 CI/CD

GitHub Actions workflow is included (`.github/workflows/ci.yml`):

- Runs on push/PR to main/master/develop
- Type checking
- Linting
- Testing
- Building

## 🔧 Troubleshooting

### Route Tree Not Found Error

If you see an error like `Cannot find module './routeTree.gen'`, the route tree file wasn't generated. This is fixed automatically by:

1. **Fresh install**: Run `npm install` or `npm ci` - the `prepare` script will generate it
2. **Manual generation**: Run `npm run generate:routes`
3. **Build time**: Route tree is generated automatically before each build

The route tree file (`src/routeTree.gen.ts`) is git-ignored, so it's always generated fresh in each environment.

## 📚 Learn More

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vitest](https://vitest.dev)

## 📄 License

MIT

## 🤝 Contributing

Feel free to customize this boilerplate for your needs!
