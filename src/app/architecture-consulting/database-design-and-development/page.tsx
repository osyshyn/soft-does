import data from "@shared/texts/architecture-consulting/database-design-development.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/ddd_object.png";
import s from "./database-design-and-development.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.databaseDesign.title,
    description: seo.architectureConsulting.databaseDesign.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.databaseDesign}`,
    },
    openGraph: {
      title: seo.architectureConsulting.databaseDesign.openGraph.title,
      description: seo.architectureConsulting.databaseDesign.openGraph.description,
      url: seo.architectureConsulting.databaseDesign.openGraph.url,
      images: seo.architectureConsulting.databaseDesign.openGraph.images,
      type: seo.architectureConsulting.databaseDesign.openGraph.type as "website",
    },
    twitter: {
      title: seo.architectureConsulting.databaseDesign.twitter.title,
      description: seo.architectureConsulting.databaseDesign.twitter.description,
      images: seo.architectureConsulting.databaseDesign.twitter.images,
    },
  };
}

export default function DatabaseDesignAndDevelopment() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Database Design & Development",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/architecture-consulting/database-design-and-development",
      logo: "https://softdoes.com/images/logo.png",
      sameAs: [
        "https://twitter.com/softdoes",
        "https://www.linkedin.com/company/softdoes",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "1234 Main St",
        addressLocality: "Kansas City",
        addressRegion: "KS",
        postalCode: "66101",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    description:
      "SoftDoes offers expert database design and development services, specializing in scalable, secure, and high-performance database architectures tailored to your business needs.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/architecture-consulting/database-design-and-development",
      priceCurrency: "USD",
      eligibleRegion: "US",
      price: "Contact for pricing",
      priceValidUntil: "2025-12-31",
    },
    areaServed: "US",
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking scalable and secure database solutions",
    },
    keywords: [
      "Database Design",
      "Database Development",
      "Scalable Databases",
      "Secure Databases",
      "High-Performance Databases",
      "Database Architecture",
    ],
    mainEntityOfPage:
      "https://softdoes.com/architecture-consulting/database-design-and-development",
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
        backgroundKey="dark"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
