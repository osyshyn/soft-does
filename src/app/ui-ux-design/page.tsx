import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Testimonials } from "@sections/testimonials/testimonials";
import data from "@shared/texts/ui-ux-design/index.json";

import { User, Interface, Light } from "@assets/icons/services/uiux/icons";
import { ServicesList } from "@sections/services-list/services-list";

import s from "./ui-ux-design.module.scss";

import HeroImg from "@assets/images/uiux/heroObject1.png";

const content = [
  {
    image: <User />,
    title: "User Experience Design",
    text: "Create intuitive interfaces that enhance user satisfaction.",
    link: ROUTES.uiUxDesign.userED,
  },
  {
    image: <Interface />,
    title: "User Interface Design",
    text: "Aesthetic and functional design solutions that drive engagement.",
    link: ROUTES.uiUxDesign.userID,
  },
  {
    image: <Light />,
    title: "Product Design Services",
    text: "Innovate your product design to improve usability and ROI.",
    link: ROUTES.uiUxDesign.productDS,
  },
];

export default function Uiux() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.uiUxDesign.root}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={HeroImg}
          backgroundKey="uiux"
          isDynamicImage
          textContainerClassName={s.textContainer}
          heroImgClassName={s.heroImg}
        />
        <Results />
        <Technologies />
        <div className="sectionWrapper">
          <ServicesList services={content} />
        </div>
        <Engagement />
        <div className="sectionWrapper">
          <CaseStudies />
        </div>
        <Testimonials />
        <Solutions />
      </Layout>
    </>
  );
}
