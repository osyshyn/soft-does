import data from "@shared/texts/aiml/aiDev.json";

import { SEO } from "@shared/ui/seo";
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
  };
}

export default function AiDev() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.aiAndMl.aiDev}
      />
      <Layout>
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
    </>
  );
}
