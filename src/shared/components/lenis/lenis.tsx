import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      prevent: (node) => node.id === "modal",
    });
    setLenis(instance);
    return () => instance.destroy();
  }, []);

  // Option A: don’t render children until Lenis is ready
  if (lenis === null) return null;

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export const useLenis = () => {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error("useLenis must be inside a LenisProvider");
  return ctx;
};

// shared/components/lenis/lenis.tsx
export function useLockScroll(locked: boolean = true) {
  const lenis = useLenis();
  useEffect(() => {
    if (!locked) return;

    // Pause Lenis animation but also disable wheel/touch interception
    // lenis typings don't expose these so w cast to any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalSmoothWheel = (lenis as any).options?.smoothWheel;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalSmoothTouch = (lenis as any).options?.smoothTouch;

    if (lenis) {
      lenis.stop();
      // try to prevent Lenis from calling preventDefault
      if (lenis.options) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (lenis.options as any).smoothWheel = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (lenis.options as any).smoothTouch = false;
      }
    }

    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      if (lenis) {
        // restore options and resume
        if (lenis.options) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (lenis.options as any).smoothWheel = originalSmoothWheel;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (lenis.options as any).smoothTouch = originalSmoothTouch;
        }
        lenis.start();
      }
      document.body.style.overflow = originalOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [locked, lenis]);
}
