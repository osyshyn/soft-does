import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/dsag_object.png";
import s from "./data-strategy-and-governance.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.dataStrategy.title,
    description: seo.dataScience.dataStrategy.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.dataStrategy}`,
    },
  };
}

export default function DataSG() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Strategy and Governance",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/data-science-and-engineering/data-strategy-and-governance",
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
      "Establish robust data governance frameworks to ensure data integrity, compliance, and strategic alignment across your organization.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/data-science-and-engineering/data-strategy-and-governance",
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
        "Enterprises and organizations seeking to optimize data management and governance practices",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/data-science-and-engineering/data-strategy-and-governance",
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
          name: "Data Strategy and Governance",
          item: "https://softdoes.com/data-science-and-engineering/data-strategy-and-governance",
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
        data={{
          title: "Data Strategy and Governance",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        heroImg={HeroObj}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="dataSG"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
