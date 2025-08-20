import data from "@shared/texts/aiml/caiSolutions.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/aiml/aimlServices/heroObject_caiSolutions.png";
import s from "./custom-ai-solutions.module.scss";

export default function CaiSolutions() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.aiAndMl.caiSolutions}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          isDynamicImage
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          backgroundKey="caiSolutions"
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
