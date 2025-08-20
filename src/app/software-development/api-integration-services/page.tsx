import { ROUTES } from "@shared/constants/routes";

import HeroImage from "@assets/images/softwareServices/apiIntegrationServices_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";
import s from "./api-integration-services.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.apiIntegration.title,
    description: seo.softwareDev.apiIntegration.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.apiIntegration}`,
    },
  };
}

export default function ApiIntegrationServices() {
  return (
    <Layout>
      <Hero
        heroImg={HeroImage}
        data={{
          title: "API Integration Services",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        backgroundKey="apiIntegration"
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
  );
}
