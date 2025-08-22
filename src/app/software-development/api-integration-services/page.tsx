import { ROUTES } from "@shared/constants/routes";

import HeroImage from "@assets/images/softwareServices/apiIntegrationServices_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";
import s from "./api-integration-services.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.apiIntegration.title,
    description: seo.softwareDev.apiIntegration.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.apiIntegration}`,
    },
    openGraph: {
      title: seo.softwareDev.apiIntegration.openGraph.title,
      description: seo.softwareDev.apiIntegration.openGraph.description,
      url: seo.softwareDev.apiIntegration.openGraph.url,
      images: seo.softwareDev.apiIntegration.openGraph.images,
      type: seo.softwareDev.apiIntegration.openGraph.type as "website",
    },
    twitter: {
      title: seo.softwareDev.apiIntegration.twitter.title,
      description: seo.softwareDev.apiIntegration.twitter.description,
      images: seo.softwareDev.apiIntegration.twitter.images,
    },
  };
}

export default function ApiIntegrationServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "API Integration Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/software-development/api-integration-services",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "Enhance your software product with powerful and cost-effective API integration services, enabling seamless connectivity and functionality.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/software-development/api-integration-services",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to integrate APIs for enhanced software functionality"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/software-development/api-integration-services",
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
          "name": "Software Development",
          "item": "https://softdoes.com/software-development"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "API Integration Services",
          "item": "https://softdoes.com/software-development/api-integration-services"
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
        heroImg={HeroImage}
        data={{
          title: "API Integration Services",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        backgroundKey="apiIntegration"
        isDynamicImage
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
