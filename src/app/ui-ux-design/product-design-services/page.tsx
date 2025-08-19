import data from "@shared/texts/ui-ux-design/productDS.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/uiux/uiuxServices/heroObj_productDS.png";

import s from "./product-design-services.module.scss";

export default function ProductDS() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.uiUxDesign.productDS}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          backgroundKey="uiUxProductDS"
          isDynamicImage
          textContainerClassName={s.textContainer}
          heroImgClassName={s.heroImg}
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
