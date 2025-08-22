import data from "@shared/texts/architecture-consulting/business-analytics.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/ba_object.png";
import s from "./business-analytics.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.businessAnalytics.title,
    description: seo.architectureConsulting.businessAnalytics.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.businessAnalytics}`,
    },
  };
}

export default function BusinessAnalytics() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Analytics",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/architecture-consulting/business-analytics",
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
      "Transform raw data into actionable insights with SoftDoes' business analytics services, enabling data-driven decision-making and strategic growth.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/architecture-consulting/business-analytics",
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
        "Enterprises and organizations seeking to leverage data analytics for strategic advantage",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/architecture-consulting/business-analytics",
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
          name: "Business Analytics",
          item: "https://softdoes.com/architecture-consulting/business-analytics",
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
        backgroundKey="architectureBA"
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
