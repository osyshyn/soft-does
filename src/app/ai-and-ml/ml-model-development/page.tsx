import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import s from "./ml-model-development.module.scss";
import HeroObj from "@assets/images/aiml/aimlServices/mlmd_object.png";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.mlMD.title,
    description: seo.aiAndMl.mlMD.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.mlMD}`,
    },
  };
}

export default function MlMD() {
  return (
    <Layout>
      <Hero
        data={{
          title: "Machine Learning Model Development",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        heroImg={HeroObj}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="mlmDev"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
