import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

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
  // The Spline component is only loaded client-side and only when WebGL is available
  return <Spline scene={scene} className={className} />;
}
