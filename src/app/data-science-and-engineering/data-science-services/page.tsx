import data from "@shared/texts/dse/dataSS.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/dss_object.png";
import s from "./data-science-services.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.dataScience.title,
    description: seo.dataScience.dataScience.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.dataScience}`,
    },
    openGraph: {
      title: seo.dataScience.dataScience.openGraph.title,
      description: seo.dataScience.dataScience.openGraph.description,
      url: seo.dataScience.dataScience.openGraph.url,
      images: seo.dataScience.dataScience.openGraph.images,
      type: seo.dataScience.dataScience.openGraph.type as "website",
    },
    twitter: {
      title: seo.dataScience.dataScience.twitter.title,
      description: seo.dataScience.dataScience.twitter.description,
      images: seo.dataScience.dataScience.twitter.images,
    },
  };
}

export default function DataSS() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Science Services",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/data-science-and-engineering/data-science-services",
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
      "Unlock insights with advanced analytics and data modeling to drive informed decision-making and business growth.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/data-science-and-engineering/data-science-services",
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
        "Enterprises and organizations seeking to leverage data science for strategic advantage",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/data-science-and-engineering/data-science-services",
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
          name: "Data Science & Engineering",
          item: "https://softdoes.com/data-science-and-engineering",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Data Science Services",
          item: "https://softdoes.com/data-science-and-engineering/data-science-services",
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
        backgroundKey="dsDev"
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
