import { Metadata } from "next";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/services/hero/hero";
import { Expertise } from "@sections/services/expertise/expertise";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Industries } from "@sections/services/industries/industries";
import { TalkToUs } from "@sections/talk-to-us/talk-to-us";
import { Solutions } from "@sections/solutions/solutions";
import { Portfolio } from "@sections/services/portfolio/portfolio";

import s from "./services.module.scss";

import Layout from "@shared/components/layout/layout";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.services.title,
    description: seo.services.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.services}`,
    },
  };
}

export default function Services() {
  return (
    <Layout>
      <Hero />
      <Expertise />
      <Engagement />
      <Industries />

      <div className={s.section}>
        <TalkToUs />
      </div>

      <Solutions />

      <Portfolio />
    </Layout>
  );
}
