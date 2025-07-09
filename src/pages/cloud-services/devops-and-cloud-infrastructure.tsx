import data from "@shared/texts/cloud/dci.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero_bg/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/cloud/services/heroObject_DCI.png";

export default function DCI() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.cloudServices.devOps}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          imgStyles={{ right: "-10%", width: "70%" }}
          isStaticImage={false}
          bgImg="heroBg_DCI.png"
          bgStyles={{
            backgroundPosition: "bottom",
            backgroundSize: "100%",
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
