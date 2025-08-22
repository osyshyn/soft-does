import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/expertise";
import HeroImg from "@assets/images/expertise/hero.png";
import { Hero } from "@sections/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Consulting } from "@sections/expertise/consulting/consulting";
import { Industries } from "@sections/services/industries/industries";

import Layout from "@shared/components/layout/layout";

import s from "./expertise.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.expertise.title,
    description: seo.expertise.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.expertise}`,
    },
  };
}

export default function ExpertisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MVP Development",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com",
      logo: "https://softdoes.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/softdoes",
        "https://twitter.com/softdoes",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main St",
        addressLocality: "Kansas City",
        addressRegion: "KS",
        postalCode: "66101",
        addressCountry: "US",
      },
    },
    description:
      "SoftDoes offers expert MVP development services, transforming market insights into globally beloved apps that power your business. With over 350 completed projects and a team of 40+ software engineers, we specialize in creating scalable, reliable software solutions tailored to your needs.",
    areaServed: "US",
    industry: "Software Development",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/software-development/mvp-development",
      priceCurrency: "USD",
      eligibleRegion: "US",
      price: "Contact for pricing",
      priceValidUntil: "2025-12-31",
      serviceOutput: {
        "@type": "CreativeWork",
        name: "MVP Development",
        description:
          "Development of Minimum Viable Products to test and validate business ideas with real users.",
      },
    },
    additionalType: "https://schema.org/SoftwareApplication",
    softwareRequirements: "Java, React, Node.js, PostgreSQL, AWS",
    applicationCategory: "BusinessApplication",
    audience: {
      "@type": "Audience",
      audienceType: "Startups, Entrepreneurs, Product Managers",
    },
    providerMobility: "https://softdoes.com/expertise",
    serviceAudience: {
      "@type": "Audience",
      audienceType: "Businesses seeking to launch MVPs",
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

      <div className="sectionWrapper">
        <Hero
          data={data.hero}
          heroImg={HeroImg}
          backgroundKey="blue"
          isDynamicImage
          textContainerClassName={s.textContainer}
          heroImgClassName={s.heroImg}
        />
      </div>
      <Solutions />
      <Consulting />
      <Industries />
    </Layout>
  );
}
