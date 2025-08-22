import data from "@shared/texts/ui-ux-design/productDS.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/edm_object.png";
import s from "./enterprise-data-management.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.enterpriseData.title,
    description: seo.dataScience.enterpriseData.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.enterpriseData}`,
    },
    openGraph: {
      title: seo.dataScience.enterpriseData.openGraph.title,
      description: seo.dataScience.enterpriseData.openGraph.description,
      url: seo.dataScience.enterpriseData.openGraph.url,
      images: seo.dataScience.enterpriseData.openGraph.images,
      type: seo.dataScience.enterpriseData.openGraph.type as "website",
    },
    twitter: {
      title: seo.dataScience.enterpriseData.twitter.title,
      description: seo.dataScience.enterpriseData.twitter.description,
      images: seo.dataScience.enterpriseData.twitter.images,
    },
  };
}

export default function Enterprise() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Enterprise Data Management",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/data-science-and-engineering/enterprise-data-management",
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
      "Comprehensive enterprise data management services to optimize data assets across your organization, ensuring data integrity, accessibility, and scalability.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/data-science-and-engineering/enterprise-data-management",
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
        "Organizations seeking to optimize and manage their enterprise data assets",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/data-science-and-engineering/enterprise-data-management",
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
          name: "Enterprise Data Management",
          item: "https://softdoes.com/data-science-and-engineering/enterprise-data-management",
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
