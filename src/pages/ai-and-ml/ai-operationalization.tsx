import data from "@shared/texts/aiml/aiOperation.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero_bg/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/aiml/aimlServices/heroObject_aiOperation.png";

export default function AiOperation() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.aiAndMl.aiOperation}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          imgStyles={{ right: "2%", width: "45%" }}
          isStaticImage={false}
          bgImg={["heroBgL_aiOperation.png", "heroBgR_aiOperation.png"]}
          bgStyles={{
            backgroundPosition: "left bottom, right bottom",
            backgroundSize: "contain, 100% 100%",
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
