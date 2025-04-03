import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/IndustriesPage/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/industries/industries";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Benefits } from "@sections/IndustriesPage/benefits/benefits";
import { Portfolio } from "@sections/portfolio/portfolio";

import Layout from "@shared/components/layout/layout";

export default function IndustriesPage() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.industries} />
      <Layout>
        <Hero />
        <Industries />
        <Solutions />
        <Testimonials />
        <Benefits />
        <Portfolio />
      </Layout>
    </>
  );
}
