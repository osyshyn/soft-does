import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default Spline;
