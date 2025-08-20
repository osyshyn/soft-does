import data from "@shared/texts/ui-ux-design/userID.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/uiux/uiuxServices/heroObj_userID.png";
import s from "./user-interface-design.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.uiUxDesign.userID.title,
    description: seo.uiUxDesign.userID.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.uiUxDesign.userID}`,
    },
  };
}

export default function UserID() {
  return (
    <Layout>
      <Hero
        data={data.hero}
        heroImg={HeroObj}
        backgroundKey="uiUxUserID"
        isDynamicImage={false}
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
