import '@styles/global.scss';
import '@styles/document.scss';

import { Providers } from '@shared/providers';
import Script from 'next/script';

import { Abel, JetBrains_Mono, Poppins } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const jetbrains = JetBrains_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-jb',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
	display: 'swap',
	variable: '--font-poppins',
});

const abel = Abel({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-abel',
});

declare global {
	interface Window {
		_hsq?: Array<[string, string?]>;
	}
}

export const metadata = {
	title: 'Custom Software & Digital Transformation | SoftDoes',

	description:
		'SoftDoes delivers best software development services—from digital transformation to custom enterprise solutions—with dedicated development teams and consulting',
	robots: 'index, follow',
	verification: {
		other: {
			'msvalidate.01': 'F5209D1328DD30DE962ED28F24AE7E3D',
		},
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MSS4VL5B');
            `,
					}}
				/>
			</head>
			<body lang='en'>
				{/* Google Tag Manager (noscript) */}
				<noscript
					dangerouslySetInnerHTML={{
						__html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSS4VL5B"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
					}}
				/>
				{/* End Google Tag Manager (noscript) */}

				{/* Google Analytics */}
				<Script
					src='https://www.googletagmanager.com/gtag/js?id=AW-11547473176'
					strategy='afterInteractive'
				/>
				<Script id='gtag-init' strategy='afterInteractive'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11547473176');
          `}
				</Script>

				<Providers>
					<div
						className={`${jetbrains.variable} ${poppins.variable} ${abel.variable}`}
					>
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
