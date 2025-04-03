import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/services/hero/hero";
import { Expertise } from "@sections/services/expertise/expertise";
import { Engagement } from "@sections/services/engagement-options/engagement-options";
import { Industries } from "@sections/services/industries/industries";
import { TalkToUs } from "@sections/services/talk-to-us/talk-to-us";
import { Solutions } from "@sections/services/solutions/solutions";
import { Portfolio } from "@sections/services/portfolio/portfolio";

import Layout from "@shared/components/layout/layout";

export default function Services() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.services} />
      <Layout>
        <Hero />
        <Expertise />
        <Engagement />
        <Industries />
        <TalkToUs />
        <Solutions />
        <Portfolio />
      </Layout>
    </>
  );
}
