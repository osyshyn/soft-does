import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/hero/hero";
import { GridPorfolio } from "@sections/grid-porfolio/grid-porfolio";

import Layout from "@shared/components/layout/layout";
import data from "@shared/texts/industries/index.json";
import HeroImg from "@assets/images/portfolio/hero.png";
import s from "./porfolio.module.scss";

export default function PortfolioPage() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.industries}
      />
      <Layout talkToUs={false} faq={false}>
        <Hero data={data.hero} heroImg={HeroImg} backgroundKey="grey" />

        <div className={s.lastSection}>
          <GridPorfolio />
        </div>
      </Layout>
    </>
  );
}
