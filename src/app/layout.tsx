import "@styles/global.scss";
import "@styles/document.scss";

import { ClientProviders } from "@shared/components/providers/client-providers";
import Script from "next/script";

import { Abel, JetBrains_Mono, Poppins } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/grid";

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

export const metadata = {
  title: "SOFT DOES",
  description: "SOFT DOES is company, that will help your business grow!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
        <ClientProviders>
          <div
            className={`${jetbrains.variable} ${poppins.variable} ${abel.variable}`}
          >
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
