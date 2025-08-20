import { ROUTES } from "@shared/constants/routes";
import { Hero } from "@sections/hero/hero";
import { GridPorfolio } from "@sections/grid-porfolio/grid-porfolio";

import Layout from "@shared/components/layout/layout";
import data from "@shared/texts/industries/index.json";
import HeroImg from "@assets/images/portfolio/hero.png";
import s from "./porfolio.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.portfolio.title,
    description: seo.portfolio.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.portfolio}`,
    },
  };
}

export default function PortfolioPage() {
  return (
    <Layout talkToUs={false} faq={false}>
      <Hero
        data={data.hero}
        heroImg={HeroImg}
        backgroundKey="grey"
        isDynamicImage
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
      />

      <div className={s.lastSection}>
        <GridPorfolio />
      </div>
    </Layout>
  );
}
