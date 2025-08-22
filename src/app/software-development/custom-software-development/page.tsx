import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareServices/customSoftDev/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.customSoftDev.title,
    description: seo.softwareDev.customSoftDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.customSoftDev}`,
    },
  };
}

export default function CustomSoftwareDev() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/software-development/custom-software-development",
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
      "Tailored software solutions designed to meet your unique business needs, enhancing efficiency, scalability, and user engagement.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/software-development/custom-software-development",
      priceCurrency: "USD",
      price: "Pricing based on project scope",
      eligibleRegion: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking customized software solutions",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/software-development/custom-software-development",
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
          name: "Software Development",
          item: "https://softdoes.com/software-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Custom Software Development",
          item: "https://softdoes.com/software-development/custom-software-development",
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
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
