"use client";

import React, { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LoadingComponent from "@/components/loading";
import Header from "../header";
import Footer from "../footer";

interface RecoilRootWrapperProps {
  children: any;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryWrapper({ children }: RecoilRootWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingComponent />}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
