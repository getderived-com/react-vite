import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { MainRouter } from "@/components/router/main-router";
import { AuthProvider } from "@/lib/auth/auth-context";
import { queryClient } from "@/lib/query-client";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
        </QueryClientProvider>
        <Toaster
          visibleToasts={5}
          position="bottom-right"
          richColors
          theme="dark"
          closeButton
        />
      </NuqsAdapter>
    </>
  );
}

export default App;
