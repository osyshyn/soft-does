import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/ui-ux-design/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { OurServices } from "@sections/our-services/our-services";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Testimonials } from "@sections/testimonials/testimonials";

import { User, Interface, Light } from "@assets/icons/services/uiux/icons";

const content = [
  {
    image: User,
    title: "User Experience Design",
    text: "Create intuitive interfaces that enhance user satisfaction.",
    link: ROUTES.uiux_design.userED,
  },
  {
    image: Interface,
    title: "User Interface Design",
    text: "Aesthetic and functional design solutions that drive engagement.",
    link: ROUTES.uiux_design.userID,
  },
  {
    image: Light,
    title: "Product Design Services",
    text: "Innovate your product design to improve usability and ROI.",
    link: ROUTES.uiux_design.productDS,
  },
];

export default function Uiux() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.uiux_design.root} />
      <Layout>
        <Hero />
        <Results />
        <Technologies />
        <OurServices content={content} />
        <Engagement />
        <CaseStudies />
        <Testimonials />
        <Solutions />
      </Layout>
    </>
  );
}
