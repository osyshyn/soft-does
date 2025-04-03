import "@styles/global.scss";
import "@styles/document.scss";
import AOS, { AosOptions } from "aos";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LenisScroll from "@shared/components/lenis/lenis";

const aosOptions: AosOptions = {
  duration: 1000,
  easing: "ease-out-quad",
  once: true,
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init(aosOptions);
  });

  return (
    <>
      <LenisScroll />
      <Component {...pageProps} />
    </>
  );
}
