import { useState } from "react";

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function Example() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col space-y-8 py-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Example Page</h1>
        <p className="text-muted-foreground">
          This is an example page showing how components and layouts work
          together.
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Counter Card */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Interactive Counter</h2>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-4xl font-bold">{count}</p>
            <div className="flex gap-2">
              <Button onClick={() => setCount((c) => c - 1)} variant="outline">
                Decrement
              </Button>
              <Button onClick={() => setCount(0)} variant="secondary">
                Reset
              </Button>
              <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Button Variants</h2>
          <div className="flex flex-col space-y-2">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Responsive Layout</h2>
        <p className="text-muted-foreground">
          This page uses a responsive grid layout that adapts to different
          screen sizes. On mobile, cards stack vertically. On tablet and
          desktop, they appear side by side. The AppShell provides consistent
          padding and max-width container across all pages.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center pt-4">
        <Button variant="outline" render={<Link to="/" />}>
          ← Back to Home
        </Button>
      </div>
    </div>
  );
}

