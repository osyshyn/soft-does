import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/ui-ux-design/services/user-experience-design/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.uiUxDesign.userED.title,
    description: seo.uiUxDesign.userED.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.uiUxDesign.userED}`,
    },
  };
}

export default function UserED() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "User Experience Design",
    provider: {
      "@type": "Organization",
      name: "SOFT DOES",
      url: "https://softdoes.com/ui-ux-design/user-experience-design",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Kansas St",
        addressLocality: "Kansas City",
        addressRegion: "KS",
        postalCode: "66101",
        addressCountry: "US",
      },
    },
    description:
      "SOFT DOES offers comprehensive User Experience Design services, creating intuitive and engaging interfaces that enhance user satisfaction and drive business success.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/ui-ux-design/user-experience-design",
      priceCurrency: "USD",
      price: "Contact for pricing",
      eligibleRegion: "US",
      eligibleDuration: "P1Y",
      priceValidUntil: "2025-12-31",
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Businesses seeking to enhance user experience through professional UX design services",
    },
    mainEntityOfPage:
      "https://softdoes.com/ui-ux-design/user-experience-design",
    keywords: [
      "UX Design",
      "User Experience",
      "Interface Design",
      "User-Centered Design",
      "Usability Testing",
    ],
    additionalType: "https://schema.org/Service",
    sameAs: "https://softdoes.com/ui-ux-design/user-experience-design",
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
