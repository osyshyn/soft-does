import Spline from "@splinetool/react-spline";

type SafeSplineProps = {
  scene: string;
  className?: string;
};

export default function SafeSpline({ scene, className }: SafeSplineProps) {
  if (typeof window === "undefined") return null;

  return <Spline scene={scene} className={className} />;
}
