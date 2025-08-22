import data from "@shared/texts/aiml/caiSolutions.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/aiml/aimlServices/heroObject_caiSolutions.png";
import s from "./custom-ai-solutions.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.caiSolutions.title,
    description: seo.aiAndMl.caiSolutions.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.caiSolutions}`,
    },
    openGraph: {
      title: seo.aiAndMl.caiSolutions.openGraph.title,
      description: seo.aiAndMl.caiSolutions.openGraph.description,
      url: seo.aiAndMl.caiSolutions.openGraph.url,
      images: seo.aiAndMl.caiSolutions.openGraph.images,
      type: seo.aiAndMl.caiSolutions.openGraph.type as "website",
    },
    twitter: {
      title: seo.aiAndMl.caiSolutions.twitter.title,
      description: seo.aiAndMl.caiSolutions.twitter.description,
      images: seo.aiAndMl.caiSolutions.twitter.images,
    },
  };
}

export default function CaiSolutions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom AI Solutions",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/ai-and-ml/custom-ai-solutions",
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
      "Tailored AI solutions designed to address unique business challenges, enhancing operational efficiency and decision-making processes.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/ai-and-ml/custom-ai-solutions",
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
        "Enterprises and organizations seeking to leverage custom AI solutions for strategic advantage",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage: "https://softdoes.com/ai-and-ml/custom-ai-solutions",
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
          name: "Custom AI Solutions",
          item: "https://softdoes.com/ai-and-ml/custom-ai-solutions",
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
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="caiSolutions"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
