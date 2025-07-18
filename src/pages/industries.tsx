import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Portfolio } from "@sections/services/portfolio/portfolio";
import HeroImg from "@assets/images/industries/hero.png";
import Layout from "@shared/components/layout/layout";
import data from "@shared/texts/industries/index.json";
import { Engagement } from "@sections/engagement-options/engagement-options";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.industries}
      />
      <Layout>
        <Hero data={data.hero} heroImg={HeroImg} backgroundKey="pink" />
        <Industries />
        <Solutions />
        <Testimonials />
        <Engagement />
        <Portfolio />
      </Layout>
    </>
  );
}
