import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/companyPage/results/results";
import { Stats } from "@sections/companyPage/stats/stats";
import { Steps } from "@sections/companyPage/steps/steps";

import HeroImage from "@assets/images/company/hero.png";
import data from "@shared/texts/company/index.json";

import s from "./company.module.scss";

import Layout from "@shared/components/layout/layout";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.company.title,
    description: seo.company.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.company}`,
    },
  };
}

export default function Company() {
  return (
    <Layout>
      <div className={"sectionWrapper"}>
        <Hero
          data={data.hero}
          heroImg={HeroImage}
          backgroundKey="turquoise"
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          isDynamicImage
        />
      </div>

      <div className={"sectionWrapper"}>
        <Results />
      </div>

      <div className={"sectionWrapper"}>
        <Stats />
      </div>

      <Steps />
    </Layout>
  );
}
