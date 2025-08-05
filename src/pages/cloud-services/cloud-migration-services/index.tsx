import data from "@shared/texts/cloud/cms.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/cloud/services/cms_object.png";

import s from "./cloud-migration-services.module.scss";

export default function CMS() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.cloudServices.cloudMigration}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          backgroundKey="cloudCMS"
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
