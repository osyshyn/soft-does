import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/dse/services/dsag_object.png";
import s from "./data-strategy-and-governance.module.scss";

export default function DataSG() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.dataScnAndEngnrng.dataStrategy}
      />
      <Layout>
        <Hero
          data={{
            title: "Data Strategy and Governance",
            tagText: "Designs that captivate, experiences that deliver.",
            btnText: "Contact us",
          }}
          heroImg={HeroObj}
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          backgroundKey="dataSG"
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
