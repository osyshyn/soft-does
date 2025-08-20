"use client";

import { LenisProvider } from "@shared/components/lenis/lenis";
import NoContactsProvider from "providers/NoContactProvider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <NoContactsProvider>
      <LenisProvider>{children}</LenisProvider>
    </NoContactsProvider>
  );
}
