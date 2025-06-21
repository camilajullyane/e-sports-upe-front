import { QueryClient } from "@tanstack/react-query";

export const QueryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
