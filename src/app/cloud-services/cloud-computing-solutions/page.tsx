import data from "@shared/texts/cloud/ccs.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/cloud/services/ccs_object.png";

import s from "./cloud-computing-solutions.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.cloudServices.ccs.title,
    description: seo.cloudServices.ccs.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.cloudServices.ccs}`,
    },
  };
}

export default function CCS() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Computing Solutions",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/cloud-services/cloud-computing-solutions",
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
      "Comprehensive cloud computing solutions designed to enhance scalability, security, and efficiency for businesses of all sizes.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/cloud-services/cloud-computing-solutions",
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
        "Businesses seeking scalable and secure cloud computing solutions",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/cloud-services/cloud-computing-solutions",
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
          name: "Cloud Services",
          item: "https://softdoes.com/cloud-services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cloud Computing Solutions",
          item: "https://softdoes.com/cloud-services/cloud-computing-solutions",
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
        backgroundKey="cloudCCS"
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
