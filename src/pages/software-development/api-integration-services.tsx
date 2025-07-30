import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

// import { Hero } from "@sections/softwareServices/mvpDev/hero/hero";
import HeroImage from "@assets/images/softwareServices/apiIntegrationServices_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";

export default function ApiIntegrationServices() {
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
            title: "API Integration Services",
            tagText: "Designs that captivate, experiences that deliver.",
            btnText: "Contact us",
          }}
          backgroundKey="apiIntegration"
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
