import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

/**
 * Create a new QueryClient for testing with specific defaults
 * to avoid retries and logging in tests
 */
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
      mutations: {
        retry: false,
      },
    },
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  });
}

/**
 * Wrapper component that provides QueryClient context for components that use React Query
 */
function createWrapper(queryClient: QueryClient) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  };
}

/**
 * Custom render function that wraps components with necessary providers
 * Use this instead of @testing-library/react's render for components that use React Query
 */
export function renderWithQueryClient(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  const queryClient = createTestQueryClient();
  return {
    ...render(ui, { wrapper: createWrapper(queryClient), ...options }),
    queryClient,
  };
}

/**
 * Re-export everything from @testing-library/react
 */
export * from "@testing-library/react";
