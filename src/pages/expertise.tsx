import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/expertise/index.json";
import HeroImg from "@assets/images/expertise/hero.png";
import { Hero } from "@sections/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Consulting } from "@sections/expertise/consulting/consulting";
import { Industries } from "@sections/services/industries/industries";

import Layout from "@shared/components/layout/layout";

export default function ExpertisePage() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.expertise}
      />
      <Layout>
        <Hero data={data.hero} heroImg={HeroImg} backgroundKey="blue" />
        <Solutions />
        <Consulting />
        <Industries />
      </Layout>
    </>
  );
}
