import { ROUTES } from "@shared/constants/routes";
import { Hero } from "@sections/hero/hero";
import { GridPorfolio } from "@sections/grid-porfolio/grid-porfolio";

import Layout from "@shared/components/layout/layout";
import data from "@shared/texts/industries/index.json";
import HeroImg from "@assets/images/portfolio/hero.png";
import s from "./porfolio.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.portfolio.title,
    description: seo.portfolio.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.portfolio}`,
    },
    openGraph: {
      title: seo.portfolio.openGraph.title,
      description: seo.portfolio.openGraph.description,
      url: seo.portfolio.openGraph.url,
      images: seo.portfolio.openGraph.images,
      type: seo.portfolio.openGraph.type as "website",
    },
    twitter: {
      title: seo.portfolio.twitter.title,
      description: seo.portfolio.twitter.description,
      images: seo.portfolio.twitter.images,
    },
  };
}

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Portfolio | SoftDoes",
    url: "https://softdoes.com/portfolio",
    description:
      "Explore SoftDoes portfolio showcasing advanced software development projects, AI, Web3, and enterprise solutions.",
    publisher: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://softdoes.com/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/company/softdoes",
        "https://twitter.com/SoftDoes",
      ],
    },
    mainEntity: [
      {
        "@type": "CreativeWork",
        name: "AI Operationalization Platform",
        url: "https://softdoes.com/portfolio/ai-operationalization",
        description:
          "A project on operationalizing machine learning in enterprise workflows.",
        datePublished: "2025-05-01",
        image:
          "https://softdoes.com/portfolio/images/ai-operationalization.png",
        author: {
          "@type": "Organization",
          name: "SoftDoes",
        },
        keywords: "AI, Machine Learning, Enterprise, Workflow Automation",
      },
      {
        "@type": "CreativeWork",
        name: "LinkedIn Lead Processor",
        url: "https://softdoes.com/portfolio/linkedin-lead-processor",
        description:
          "A tool that automates lead list cleaning, enrichment, and LinkedIn targeting.",
        datePublished: "2025-06-15",
        image:
          "https://softdoes.com/portfolio/images/linkedin-lead-processor.png",
        author: {
          "@type": "Organization",
          name: "SoftDoes",
        },
        keywords: "Lead Generation, Sales Automation, LinkedIn, B2B",
      },
      {
        "@type": "CreativeWork",
        name: "AI Legal Ops Assistant",
        url: "https://softdoes.com/portfolio/ai-legal-ops-assistant",
        description:
          "AI assistant streamlining contract analysis, compliance, and legal operations.",
        datePublished: "2025-07-10",
        image:
          "https://softdoes.com/portfolio/images/ai-legal-ops-assistant.png",
        author: {
          "@type": "Organization",
          name: "SoftDoes",
        },
        keywords: "LegalTech, AI, Contract Analysis, Compliance",
      },
    ],
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
          name: "Portfolio",
          item: "https://softdoes.com/portfolio",
        },
      ],
    },
  };

  return (
    <Layout talkToUs={false} faq={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero
        data={data.hero}
        heroImg={HeroImg}
        backgroundKey="grey"
        isDynamicImage
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
      />

      <div className={s.lastSection}>
        <GridPorfolio />
      </div>
    </Layout>
  );
}
