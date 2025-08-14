"use client";
/* eslint-disable @typescript-eslint/no-namespace */

import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { url: string };
    }
  }
}

function isBotOrHeadless() {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent.toLowerCase();
  return (
    /bot|crawler|spider|lighthouse|headless|vercel|node/.test(ua) ||
    (navigator as any).webdriver === true
  );
}

type Props = { scene: string; className?: string };

export default function SafeSpline({ scene, className }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isBotOrHeadless()) return;

    let cancelled = false;

    // @ts-ignore
    if (
      typeof customElements !== "undefined" &&
      customElements.get?.("spline-viewer")
    ) {
      setReady(true);
      return;
    }

    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    s.onload = () => !cancelled && setReady(true);
    document.head.appendChild(s);

    return () => {
      cancelled = true;
      document.head.removeChild(s);
    };
  }, []);

  if (!ready) return null;

  // @ts-expect-error: web component
  return <spline-viewer url={scene} class={className} />;
}
