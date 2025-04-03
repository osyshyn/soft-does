import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/portfolioPage/hero/hero";
import { Portfolio } from "@sections/portfolioPage/portfolio/portfolio";

import Layout from "@shared/components/layout/layout";

export default function PortfolioPage() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.industries} />
      <Layout talkToUs={false} faq={false}>
        <Hero />
        <Portfolio />
      </Layout>
    </>
  );
}
