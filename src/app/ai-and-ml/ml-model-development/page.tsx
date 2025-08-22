import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import s from "./ml-model-development.module.scss";
import HeroObj from "@assets/images/aiml/aimlServices/mlmd_object.png";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.mlMD.title,
    description: seo.aiAndMl.mlMD.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.mlMD}`,
    },
    openGraph: {
      title: seo.aiAndMl.mlMD.openGraph.title,
      description: seo.aiAndMl.mlMD.openGraph.description,
      url: seo.aiAndMl.mlMD.openGraph.url,
      images: seo.aiAndMl.mlMD.openGraph.images,
      type: seo.aiAndMl.mlMD.openGraph.type as "website",
    },
    twitter: {
      title: seo.aiAndMl.mlMD.twitter.title,
      description: seo.aiAndMl.mlMD.twitter.description,
      images: seo.aiAndMl.mlMD.twitter.images,
    },
  };
}

export default function MlMD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Machine Learning Model Development",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/ai-and-ml/ml-model-development",
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
      "Custom machine learning models tailored to your business needs, enhancing decision-making, automation, and predictive analytics.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/ai-and-ml/ml-model-development",
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
        "Businesses seeking to leverage machine learning for enhanced decision-making and automation",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage: "https://softdoes.com/ai-and-ml/ml-model-development",
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
          name: "Machine Learning Model Development",
          item: "https://softdoes.com/ai-and-ml/ml-model-development",
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
          title: "Machine Learning Model Development",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        heroImg={HeroObj}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="mlmDev"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
