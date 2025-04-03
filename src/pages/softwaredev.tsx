import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareDev/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Services } from "@sections/softwareDev/services/services";
import { CaseStudies } from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/industries/industries";

import Layout from "@shared/components/layout/layout";

export default function SoftwareDev() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.softwaredev} />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <Services />
        <CaseStudies />
        <Engagement />
        <Solutions />
        <Industries />
      </Layout>
    </>
  );
}
