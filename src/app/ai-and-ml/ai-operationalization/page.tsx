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
  };
}

export default function AiOperation() {
  return (
    <Layout>
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
