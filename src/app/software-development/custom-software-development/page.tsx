import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareServices/customSoftDev/hero/hero";
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
    title: seo.softwareDev.customSoftDev.title,
    description: seo.softwareDev.customSoftDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.customSoftDev}`,
    },
  };
}

export default function CustomSoftwareDev() {
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
