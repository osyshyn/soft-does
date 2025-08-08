"use client";

import Spline from "@splinetool/react-spline/next";

type SafeSplineProps = {
  scene: string;
  className?: string;
};

export default function SafeSpline({ scene, className }: SafeSplineProps) {
  return <Spline scene={scene} className={className} />;
}
