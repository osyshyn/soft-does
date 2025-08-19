import data from "@shared/texts/architecture-consulting/product-management.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/pm_object.png";
import s from "./product-management.module.scss";

export default function ProductManagement() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.architectureConsulting.productManagement}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          backgroundKey="architecturePM"
          isDynamicImage
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
