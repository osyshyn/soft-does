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
  };
}

export default function CaiSolutions() {
  return (
    <Layout>
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
