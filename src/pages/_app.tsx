import "@styles/global.scss";
import "@styles/document.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LenisProvider } from "@shared/components/lenis/lenis";

import { Abel, JetBrains_Mono, Poppins } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jb",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-poppins",
});

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
});

declare global {
  interface Window {
    _hsq?: Array<[string, string?]>;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAdminRoute = router.pathname.startsWith("/admin");

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined" && window._hsq) {
        console.log(`[HubSpot] Tracking page view for: ${url}`);
        window._hsq.push(["setPath", url]);
        window._hsq.push(["trackPageView"]);
      } else {
        console.warn("[HubSpot] _hsq is not defined yet");
        setTimeout(() => handleRouteChange(url), 1000);
      }
    };

    if (!isAdminRoute) {
      handleRouteChange(window.location.pathname);

      router.events.on("routeChangeComplete", handleRouteChange);
    }

    return () => {
      if (!isAdminRoute)
        router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, isAdminRoute]);

  return (
    <>
      {!isAdminRoute && (
        <>
          {/* <Script
            id="hs-script-loader"
            src="//js-na2.hs-scripts.com/242390269.js"
            strategy="lazyOnload"
          /> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-11547473176"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11547473176');
`}
          </Script>
        </>
      )}

      <LenisProvider>
        <div
          className={`${jetbrains.variable} ${poppins.variable} ${abel.variable}`}
        >
          <Component {...pageProps} />
        </div>
      </LenisProvider>
    </>
  );
}
