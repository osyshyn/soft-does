import data from "@shared/texts/aiml/aiDPAuto.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero_bg/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

export default function AiDPAuto() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.aiml.aiDPAuto} />
      <Layout>
        <Hero
          data={data.hero}
          imgStyles={{ bottom: "5%", right: "4%", width: "45%" }}
          isStaticImage={false}
          bgImg="heroBg_aiDPAuto.png"
          bgStyles={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
          }}
        />
        <Results />
        <Technologies />
        <Testimonials />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
