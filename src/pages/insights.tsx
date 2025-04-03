import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/insights/hero/hero";
import { Topics } from "@sections/insights/topics/topics";
import { Releases } from "@sections/insights/releases/releases";

import Layout from "@shared/components/layout/layout";

export default function Insights() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.insights} />
      <Layout>
        <Hero />
        <Topics />
        <Releases />
      </Layout>
    </>
  );
}
