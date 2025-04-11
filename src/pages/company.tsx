import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/companyPage/hero/hero";
import { Results } from "@sections/companyPage/results/results";
import { Stats } from "@sections/companyPage/stats/stats";
import { Steps } from "@sections/companyPage/steps/steps";

import Layout from "@shared/components/layout/layout";

export default function Company() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.company} />
      <Layout>
        <Hero />
        <Results />
        <Stats />
        <Steps />
      </Layout>
    </>
  );
}
