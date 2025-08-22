import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/insights/hero/hero";
import { Releases } from "@sections/insights/releases/releases";

import Layout from "@shared/components/layout/layout";
import { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.insights.title,
    description: seo.insights.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.insights}`,
    },
    openGraph: {
      title: seo.insights.openGraph.title,
      description: seo.insights.openGraph.description,
      url: seo.insights.openGraph.url,
      images: seo.insights.openGraph.images,
      type: seo.insights.openGraph.type as "website",
    },
    twitter: {
      title: seo.insights.twitter.title,
      description: seo.insights.twitter.description,
      images: seo.insights.twitter.images,
    },
  };
}

export default function Insights() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Insights",
    url: "https://softdoes.com/insights",
    description:
      "Technical insights and software development articles from SoftDoes that help businesses stay at the forefront of technology.",
    publisher: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
    },
    mainEntityOfPage: "https://softdoes.com/insights",
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
          name: "Insights",
          item: "https://softdoes.com/insights",
        },
      ],
    },
    article: {
      "@type": "Blog",
      headline: "Tech Insights & Software Development Articles",
      description:
        "Latest articles and analysis from SoftDoes on software development, technology trends, and innovations.",
      datePublished: "2024-01-01",
      dateModified: "2024-01-01",
      author: {
        "@type": "Person",
        name: "SoftDoes Team",
        url: "https://softdoes.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "SoftDoes",
        url: "https://softdoes.com",
        logo: "https://softdoes.com/logo.png",
        sameAs: "https://www.linkedin.com/company/softdoes",
      },
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
      <Releases />
    </Layout>
  );
}
