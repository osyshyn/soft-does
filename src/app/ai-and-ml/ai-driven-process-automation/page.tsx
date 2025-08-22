import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/ai-and-ml/ai-driven-process-automation/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.aiDPAuto.title,
    description: seo.aiAndMl.aiDPAuto.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.aiDPAuto}`,
    },
  };
}

export default function AiDPAuto() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI-Driven Process Automation",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/ai-and-ml/ai-driven-process-automation",
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
      "Implement AI-driven automation solutions to streamline operations, reduce manual tasks, and enhance decision-making processes.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/ai-and-ml/ai-driven-process-automation",
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
        "Businesses seeking to automate processes using AI technologies",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/ai-and-ml/ai-driven-process-automation",
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
          name: "AI & Machine Learning",
          item: "https://softdoes.com/ai-and-ml",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI-Driven Process Automation",
          item: "https://softdoes.com/ai-and-ml/ai-driven-process-automation",
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
