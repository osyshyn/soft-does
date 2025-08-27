import LenisProvider from "./lenis-provider";
import NoContactsProvider from "./no-contact-provider";

export { useLenis, useLockScroll } from "./lenis-provider";

export { useNoContacts, HideContacts } from "./no-contact-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NoContactsProvider>
      <LenisProvider>{children}</LenisProvider>
    </NoContactsProvider>
  );
}
