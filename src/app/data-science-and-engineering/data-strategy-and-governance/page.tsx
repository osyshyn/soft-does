import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/dsag_object.png";
import s from "./data-strategy-and-governance.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.dataStrategy.title,
    description: seo.dataScience.dataStrategy.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.dataStrategy}`,
    },
  };
}

export default function DataSG() {
  return (
    <Layout>
      <Hero
        data={{
          title: "Data Strategy and Governance",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        heroImg={HeroObj}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="dataSG"
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
