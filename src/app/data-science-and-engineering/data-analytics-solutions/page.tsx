import data from "@shared/texts/dse/dataAS.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/heroObject_dataAS.png";
import s from "./data-analytics-solutions.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.dataAnalytics.title,
    description: seo.dataScience.dataAnalytics.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.dataAnalytics}`,
    },
    openGraph: {
      title: seo.dataScience.dataAnalytics.openGraph.title,
      description: seo.dataScience.dataAnalytics.openGraph.description,
      url: seo.dataScience.dataAnalytics.openGraph.url,
      images: seo.dataScience.dataAnalytics.openGraph.images,
      type: seo.dataScience.dataAnalytics.openGraph.type as "website",
    },
    twitter: {
      title: seo.dataScience.dataAnalytics.twitter.title,
      description: seo.dataScience.dataAnalytics.twitter.description,
      images: seo.dataScience.dataAnalytics.twitter.images,
    },
  };
}

export default function DataAS() {
  const jsonLd = 
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Data Analytics Solutions",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/data-science-and-engineering/data-analytics-solutions",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "Transform raw data into actionable insights with SoftDoes' data analytics solutions, enabling data-driven decision-making and business growth.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/data-science-and-engineering/data-analytics-solutions",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to leverage data analytics for strategic advantage"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/data-science-and-engineering/data-analytics-solutions",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://softdoes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Data Science & Engineering",
          "item": "https://softdoes.com/data-science-and-engineering"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Data Analytics Solutions",
          "item": "https://softdoes.com/data-science-and-engineering/data-analytics-solutions"
        }
      ]
    }
  }

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
        backgroundKey="dataAS"
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
