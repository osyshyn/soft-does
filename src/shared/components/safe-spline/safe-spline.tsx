// import dynamic from "next/dynamic";

// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
// });

import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }
  try {
    const canvas = document.createElement("canvas");
    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    return Boolean(gl);
  } catch {
    return false;
  }
}

type SafeSplineProps = {
  scene: string;
  className?: string;
};

export default function SafeSpline({ scene, className }: SafeSplineProps) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(isWebGLAvailable());
  }, []);

  if (!canRender) return null;
  return <Spline scene={scene} className={className} />;
}
