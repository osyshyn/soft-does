import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/expertise/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Consulting } from "@sections/expertise/consulting/consulting";
import { Industries } from "@sections/industries/industries";

import Layout from "@shared/components/layout/layout";

export default function ExpertisePage() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.expertise} />
      <Layout>
        <Hero />
        <Solutions />
        <Consulting />
        <Industries />
      </Layout>
    </>
  );
}
