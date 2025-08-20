import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/expertise";
import HeroImg from "@assets/images/expertise/hero.png";
import { Hero } from "@sections/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Consulting } from "@sections/expertise/consulting/consulting";
import { Industries } from "@sections/services/industries/industries";

import Layout from "@shared/components/layout/layout";

import s from "./expertise.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.expertise.title,
    description: seo.expertise.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.expertise}`,
    },
  };
}

export default function ExpertisePage() {
  return (
    <Layout>
      <div className="sectionWrapper">
        <Hero
          data={data.hero}
          heroImg={HeroImg}
          backgroundKey="blue"
          isDynamicImage
          textContainerClassName={s.textContainer}
          heroImgClassName={s.heroImg}
        />
      </div>
      <Solutions />
      <Consulting />
      <Industries />
    </Layout>
  );
}
