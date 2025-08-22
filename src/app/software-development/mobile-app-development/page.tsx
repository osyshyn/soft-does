import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareServices/mobileAppDev/hero/hero";
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
    title: seo.softwareDev.mobileAppDev.title,
    description: seo.softwareDev.mobileAppDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.mobileAppDev}`,
    },
    openGraph: {
      title: seo.softwareDev.mobileAppDev.openGraph.title,
      description: seo.softwareDev.mobileAppDev.openGraph.description,
      url: seo.softwareDev.mobileAppDev.openGraph.url,
      images: seo.softwareDev.mobileAppDev.openGraph.images,
      type: seo.softwareDev.mobileAppDev.openGraph.type as "website",
    },
    twitter: {
      title: seo.softwareDev.mobileAppDev.twitter.title,
      description: seo.softwareDev.mobileAppDev.twitter.description,
      images: seo.softwareDev.mobileAppDev.twitter.images,
    },
  };
}

export default function MobileAppDev() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/software-development/mobile-app-development",
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
      "Comprehensive mobile app development services, from ideation to launch, including design, engineering, and scaling to create innovative digital products.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/software-development/mobile-app-development",
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
        "Startups, enterprises, and organizations seeking end-to-end mobile app development services",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/software-development/mobile-app-development",
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
          name: "Mobile App Development",
          item: "https://softdoes.com/software-development/mobile-app-development",
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
