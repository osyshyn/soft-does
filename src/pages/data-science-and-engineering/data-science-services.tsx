import data from "@shared/texts/ui-ux-design/productDS.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero_bg/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/heroObject_dataSS.png";

export default function DataSS() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.dataScnAndEngnrng.dataScience}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          imgStyles={{ right: "3%", width: "45%" }}
          isStaticImage={false}
          bgImg="heroBg_dataSS.png"
          bgStyles={{
            backgroundPosition: "bottom",
            backgroundSize: "100% 90%",
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
