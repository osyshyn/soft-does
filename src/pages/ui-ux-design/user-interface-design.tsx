import data from "@shared/texts/ui-ux-design/userID.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

// import { Hero } from "@sections/hero_bg/hero";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/uiux/uiuxServices/heroObj_userID.png";

export default function UserID() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.uiUxDesign.userID}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroObj}
          // imgStyles={{ bottom: "0", right: "8%", width: "37%" }}
          // bgImg="heroBg_userID.png"
          // bgStyles={{
          //   backgroundPosition: "bottom right",
          //   backgroundSize: "80% 90%",
          // }}
          backgroundKey="uiUxUserID"
          isDynamicImage={false}
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
