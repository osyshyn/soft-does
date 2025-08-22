import data from "@shared/texts/ui-ux-design/productDS.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/uiux/uiuxServices/heroObj_productDS.png";

import s from "./product-design-services.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.uiUxDesign.productDS.title,
    description: seo.uiUxDesign.productDS.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.uiUxDesign.productDS}`,
    },
    openGraph: {
      title: seo.uiUxDesign.productDS.openGraph.title,
      description: seo.uiUxDesign.productDS.openGraph.description,
      url: seo.uiUxDesign.productDS.openGraph.url,
      images: seo.uiUxDesign.productDS.openGraph.images,
      type: seo.uiUxDesign.productDS.openGraph.type as "website",
    },
    twitter: {
      title: seo.uiUxDesign.productDS.twitter.title,
      description: seo.uiUxDesign.productDS.twitter.description,
      images: seo.uiUxDesign.productDS.twitter.images,
    },
  };
}

export default function ProductDS() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Product Design Services",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/ui-ux-design/product-design-services",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
    },
    description:
      "Comprehensive product design from concept to launch, including research, prototyping, and testing to create successful digital products.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      eligibleRegion: {
        "@type": "Place",
        name: "USA",
      },
      url: "https://softdoes.com/ui-ux-design/product-design-services",
    },
    audience: {
      "@type": "Audience",
      description:
        "End-to-end product design from concept to launch, including research, prototyping, and testing to deliver successful digital products.",
    },
    areaServed: {
      "@type": "Place",
      name: "USA",
    },
    additionalType: "https://schema.org/ProfessionalService",
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero
        data={data.hero}
        heroImg={HeroObj}
        backgroundKey="uiUxProductDS"
        isDynamicImage
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
