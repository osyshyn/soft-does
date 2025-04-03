import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/ai-and-ml/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Services } from "@sections/ai-and-ml/services/services";
import { CaseStudies } from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";

export default function Aiml() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.aiml} />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <Services />
        <CaseStudies />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
