import data from "@shared/texts/architecture-consulting/digital-transformation.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/dt_object.png";
import s from "./digital-transformation.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.digitalTransformation.title,
    description: seo.architectureConsulting.digitalTransformation.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.digitalTransformation}`,
    },
  };
}

export default function DigitalTransformation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Transformation Consulting",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/architecture-consulting/digital-transformation",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        availableLanguage: "English",
      },
    },
    description:
      "Comprehensive digital transformation consulting services to help organizations modernize their IT infrastructure, integrate advanced technologies, and optimize business processes for enhanced efficiency and competitiveness.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/architecture-consulting/digital-transformation",
      priceCurrency: "USD",
      price: "Pricing based on project scope",
      eligibleRegion: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Organizations seeking to modernize their IT infrastructure and business processes",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/architecture-consulting/digital-transformation",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://softdoes.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Architecture & Consulting Services",
          item: "https://softdoes.com/architecture-consulting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Transformation",
          item: "https://softdoes.com/architecture-consulting/digital-transformation",
        },
      ],
    },
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
        backgroundKey="architectureDT"
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
