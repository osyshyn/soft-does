import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/ai-and-ml/ai-driven-process-automation/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

export default function AiDPAuto() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.aiAndMl.aiDPAuto}
      />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <Testimonials />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
