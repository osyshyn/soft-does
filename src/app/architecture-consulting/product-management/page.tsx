import data from "@shared/texts/architecture-consulting/product-management.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/pm_object.png";
import s from "./product-management.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.productManagement.title,
    description: seo.architectureConsulting.productManagement.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.productManagement}`,
    },
  };
}
export default function ProductManagement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Product Management",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/architecture-consulting/product-management",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
    },
    description:
      "Professional product management from concept to launch, including strategy, planning, and execution to create successful digital products.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Depends from the project",
      eligibleRegion: {
        "@type": "Place",
        name: "USA",
      },
      url: "https://softdoes.com/architecture-consulting/product-management",
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Startups, enterprises, and organizations seeking professional product management",
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
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="architecturePM"
        isDynamicImage
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
