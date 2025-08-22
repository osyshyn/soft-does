import data from "@shared/texts/aiml/aiOperation.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import s from "./ai-operationalization.module.scss";

import HeroObj from "@assets/images/aiml/aimlServices/heroObject_aiOperation.png";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.aiOperation.title,
    description: seo.aiAndMl.aiOperation.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.aiOperation}`,
    },
    openGraph: {
      title: seo.aiAndMl.aiOperation.openGraph.title,
      description: seo.aiAndMl.aiOperation.openGraph.description,
      url: seo.aiAndMl.aiOperation.openGraph.url,
      images: seo.aiAndMl.aiOperation.openGraph.images,
      type: seo.aiAndMl.aiOperation.openGraph.type as "website",
    },
    twitter: {
      title: seo.aiAndMl.aiOperation.twitter.title,
      description: seo.aiAndMl.aiOperation.twitter.description,
      images: seo.aiAndMl.aiOperation.twitter.images,
    },
  };
}

export default function AiOperation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Operationalization",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/ai-and-ml/ai-operationalization",
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
      "Comprehensive AI operationalization services covering model deployment, monitoring, governance, and scaling to transform AI prototypes into reliable enterprise systems.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/ai-and-ml/ai-operationalization",
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
        "Organizations seeking enterprise-level AI deployment and scale-up",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage: "https://softdoes.com/ai-and-ml/ai-operationalization",
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
          name: "AI Operationalization",
          item: "https://softdoes.com/ai-and-ml/ai-operationalization",
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
        isDynamicImage
        backgroundKey="aiOperation"
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
