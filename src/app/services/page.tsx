import { Metadata } from "next";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/services/hero/hero";
import { Expertise } from "@sections/services/expertise/expertise";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Industries } from "@sections/services/industries/industries";
import { TalkToUs } from "@sections/talk-to-us/talk-to-us";
import { Solutions } from "@sections/solutions/solutions";
import { Portfolio } from "@sections/services/portfolio/portfolio";

import s from "./services.module.scss";

import Layout from "@shared/components/layout/layout";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.services.title,
    description: seo.services.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.services}`,
    },
    openGraph: {
      title: seo.services.openGraph.title,
      description: seo.services.openGraph.description,
      url: seo.services.openGraph.url,
      images: seo.services.openGraph.images,
      type: seo.services.openGraph.type as "website",
    },
    twitter: {
      title: seo.services.twitter.title,
      description: seo.services.twitter.description,
      images: seo.services.twitter.images,
    },
  };
}

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Software Development, AI & Machine Learning, Cloud Services, Data Science & Engineering, Architecture & Consulting Services, UI/UX Design",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/services",
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
      "Comprehensive suite of services including software development, AI & machine learning, cloud services, data science & engineering, architecture & consulting, and UI/UX design to help businesses scale, adapt, and drive results.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/services",
      priceCurrency: "USD",
      price: "Pricing based on project scope",
      eligibleRegion: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking comprehensive technology solutions",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage: "https://softdoes.com/services",
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
          name: "Services",
          item: "https://softdoes.com/services",
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

      <Hero />
      <Expertise />
      <Engagement />
      <Industries />

      <div className={s.section}>
        <TalkToUs />
      </div>

      <Solutions />

      <Portfolio />
    </Layout>
  );
}
