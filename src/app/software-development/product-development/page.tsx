import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareServices/productDev/hero/hero";
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
    title: seo.softwareDev.productDev.title,
    description: seo.softwareDev.productDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.productDev}`,
    },
  };
}

export default function ProductDev() {
  return (
    <Layout>
      <Hero />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
