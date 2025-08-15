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

  if (lenis === null) return children;

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export const useLenis = () => {
  const ctx = useContext(LenisContext);
  return ctx;
};

export function useLockScroll(locked: boolean = true) {
  const lenis = useLenis();
  useEffect(() => {
    if (!locked || !lenis) return;

    const originalSmoothWheel = (lenis as any).options?.smoothWheel;
    const originalSmoothTouch = (lenis as any).options?.smoothTouch;

    if (lenis) {
      lenis.stop();
      if (lenis.options) {
        (lenis.options as any).smoothWheel = false;
        (lenis.options as any).smoothTouch = false;
      }
    }

    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      if (lenis) {
        if (lenis.options) {
          (lenis.options as any).smoothWheel = originalSmoothWheel;
          (lenis.options as any).smoothTouch = originalSmoothTouch;
        }
        lenis.start();
      }
      document.body.style.overflow = originalOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [locked, lenis]);
}
