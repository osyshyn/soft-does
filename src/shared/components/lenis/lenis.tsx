"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    let cancelled = false;

    const initLenis = async () => {
      try {
        const instance = new Lenis({
          // autoRaf: true,
          // lerp: 0.1,
          // prevent: (node) => node.id === "modal",
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
        });

        if (!cancelled) {
          setLenis(instance);

          // Start the animation loop
          function raf(time: number) {
            instance.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
      } catch (error) {
        console.warn("Lenis failed to initialize, using basic scroll:", error);
        // Don't set lenis, keep it null for fallback
      }
    };

    // Initialize Lenis in background
    initLenis();

    return () => {
      cancelled = true;
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  // Always render children, regardless of Lenis status
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
