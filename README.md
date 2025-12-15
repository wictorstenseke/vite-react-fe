# React + Vite + TypeScript Boilerplate

A modern, production-ready React boilerplate with best practices built in.

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible components
- 🛣️ **TanStack Router** - Type-safe routing
- ✅ **Vitest** - Fast unit testing with coverage
- 🔍 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting
- 🤖 **GitHub Actions** - CI/CD pipeline
- 📱 **Responsive** - Mobile-first design

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── AppShell.tsx      # Main layout wrapper
│   └── ui/                    # shadcn/ui components
├── pages/
│   ├── Landing.tsx            # Home page
│   └── Example.tsx            # Example page
├── routes/                    # TanStack Router routes
│   ├── __root.tsx             # Root layout
│   ├── index.tsx              # / route
│   └── example.tsx            # /example route
├── lib/
│   └── utils.ts               # Utility functions
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

This runs type checking, linting, tests, and builds the app.

## 📝 Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production (with all checks)
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run ci` - Run all checks (for CI/CD)

## 🎨 Adding Components

Add shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will be installed in `src/components/ui/`.

## 🛣️ Adding Routes

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

2. The route is automatically registered by the TanStack Router plugin.

## 🎯 Layout System

The `AppShell` component provides:

- Sticky header with navigation
- Responsive container (max-width + padding)
- Consistent spacing across pages
- Mobile-first responsive design
- Footer

All pages automatically use this layout via the root route.

## 🧪 Testing

Tests are configured with Vitest. Create test files with `.test.tsx` or `.spec.tsx` extension:

```tsx
// Example.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Example } from "./Example";

describe("Example", () => {
  it("renders correctly", () => {
    render(<Example />);
    expect(screen.getByText("Example Page")).toBeInTheDocument();
  });
});
```

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

## 📄 License

MIT

## 🤝 Contributing

Feel free to customize this boilerplate for your needs!
