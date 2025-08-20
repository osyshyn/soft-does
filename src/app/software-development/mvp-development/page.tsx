import { ROUTES } from "@shared/constants/routes";

import HeroImage from "@assets/images/softwareServices/heroMVPDev_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import s from "./mvp-development.module.scss";
import Layout from "@shared/components/layout/layout";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.mvpDev.title,
    description: seo.softwareDev.mvpDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.mvpDev}`,
    },
  };
}

export default function MvpDev() {
  return (
    <Layout>
      <Hero
        heroImg={HeroImage}
        data={{
          title: "MVP Development",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        backgroundKey="mvpDev"
        isDynamicImage
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
