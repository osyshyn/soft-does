import React from "react";
import Spline from "@splinetool/react-spline/next";

interface SplineProps {
  scene: string;
  className?: string;
}

export const SplineComponent = ({ scene, className }: SplineProps) => {
  return <Spline scene={scene} className={className} />;
};

export default SplineComponent;
