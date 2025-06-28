import data from "@shared/texts/aiml/mlMD.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero_bg/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

export default function MlMD() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.aiml.mlMD} />
      <Layout>
        <Hero
          data={data.hero}
          titleWidth={{ maxWidth: 1200 }}
          bgImg={["heroBg_mlMD.png", "heroBgWave_mlMD.png"]}
          bgStyles={{
            backgroundPosition: "top, bottom",
            backgroundSize: "100%, cover",
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
