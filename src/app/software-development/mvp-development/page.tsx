import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import HeroImage from "@assets/images/softwareServices/heroMVPDev_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import s from "./mvp-development.module.scss";
import Layout from "@shared/components/layout/layout";

export default function MvpDev() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.softwareDev.mvpDev}
      />
      <Layout>
        <Hero
          heroImg={HeroImage}
          data={{
            title: "MVP Development",
            tagText: "Designs that captivate, experiences that deliver.",
            btnText: "Contact us",
          }}
          backgroundKey="mvpDev"
          isDynamicImage
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
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
