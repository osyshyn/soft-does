import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

// import { Hero } from "@sections/companyPage/hero/hero";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/companyPage/results/results";
import { Stats } from "@sections/companyPage/stats/stats";
import { Steps } from "@sections/companyPage/steps/steps";

import HeroImage from "@assets/images/company/hero.png";
import data from "@shared/texts/industries/index.json";

import s from "./company.module.scss";

import Layout from "@shared/components/layout/layout";

export default function Company() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.company}
      />
      <Layout>
        <div className={"sectionWrapper"}>
          <Hero
            data={data.hero}
            heroImg={HeroImage}
            backgroundKey="turquoise"
            heroImgClassName={s.heroImage}
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
    </>
  );
}
