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
  };
}

export default function Insights() {
  return (
    <Layout>
      <Hero />
      <Releases />
    </Layout>
  );
}
