import data from "@shared/texts/aiml/aiDev.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/aiml/aimlServices/heroObject_aiDev.png";
import s from "./ai-development.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.aiDev.title,
    description: seo.aiAndMl.aiDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.aiDev}`,
    },
    openGraph: {
      title: seo.aiAndMl.aiDev.openGraph.title,
      description: seo.aiAndMl.aiDev.openGraph.description,
      url: seo.aiAndMl.aiDev.openGraph.url,
      images: seo.aiAndMl.aiDev.openGraph.images,
      type: seo.aiAndMl.aiDev.openGraph.type as "website",
    },
    twitter: {
      title: seo.aiAndMl.aiDev.twitter.title,
      description: seo.aiAndMl.aiDev.twitter.description,
      images: seo.aiAndMl.aiDev.twitter.images,
    },
  };
}

export default function AiDev() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://softdoes.com/#organization",
        "@type": "Organization",
        name: "SoftDoes",
        url: "https://softdoes.com/",
        logo: "https://softdoes.com/logo.png",
        description:
          "SoftDoes is a trusted software development and tech consulting firm offering custom software, AI, cloud, data engineering and DevOps services.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@softdoes.com",
          telephone: "+1-000-000-0000",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.linkedin.com/company/softdoes/",
          "https://twitter.com/softdoes",
          "https://www.facebook.com/softdoes",
        ],
      },
      {
        "@type": "WebPage",
        url: "https://softdoes.com/ai-and-ml/ai-development",
        name: "AI Development Services | SoftDoes",
        isPartOf: { "@id": "https://softdoes.com/#organization" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://softdoes.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "AI & ML",
              item: "https://softdoes.com/ai-and-ml",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "AI Development",
              item: "https://softdoes.com/ai-and-ml/ai-development",
            },
          ],
        },
        mainEntity: {
          "@type": "Service",
          "@id": "https://softdoes.com/ai-and-ml/ai-development#service",
          serviceType: "AI Development Services",
          provider: { "@id": "https://softdoes.com/#organization" },
          description:
            "Custom AI development services: from strategy and architecture to deployment of production-grade AI systems.",
          areaServed: ["US", "Canada"],
          audience: {
            "@type": "BusinessAudience",
            industry: ["SaaS", "Healthcare", "Finance", "Retail"],
          },
          offers: {
            "@type": "Offer",
            url: "https://softdoes.com/ai-and-ml/ai-development",
            price: "On request",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
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
        backgroundKey="aiDev"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
