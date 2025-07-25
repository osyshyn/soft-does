import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/softwareDev/index.json";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";
import heroObject1 from "@assets/images/softwareDev/heroObject1.png";

import { Tags } from "@shared/assets/icons/tags";
import { Phone } from "@shared/assets/icons/phone";
import { Browser } from "@shared/assets/icons/browser";
import { Rocket } from "@shared/assets/icons/rocket";
import { Gear } from "@shared/assets/icons/gear";
import { Puzzle } from "@shared/assets/icons/puzzle";

import Layout from "@shared/components/layout/layout";

const SERVICES = [
  {
    image: <Tags />,
    title: "Custom Software Development",
    text: "Tailor-made solutions that align with your business objectives.",
    link: "/custom-software-development",
  },
  {
    image: <Phone />,
    title: "Mobile App Development",
    text: "Innovative applications for Android and iOS to engage your customers.",
    link: "/mobile-app-development",
  },
  {
    image: <Browser />,
    title: "Web Application Development",
    text: "Robust and scalable web applications that enhance user experience.",
    link: "/mvp-development",
  },
  {
    image: <Rocket />,
    title: "MVP Development",
    text: "Quickly validate your ideas with Minimum Viable Products.",
    link: "/web-app-development",
  },
  {
    image: <Gear />,
    title: "Product Development",
    text: "Full-cycle product development from concept to launch.",
    link: "/",
  },
  {
    image: <Puzzle />,
    title: "API Integration Services",
    text: "Seamlessly connect disparate systems to enhance functionality and data exchange.",
    link: "/",
  },
];

export default function SoftwareDev() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.softwareDev.root}
      />
      <Layout>
        <Hero
          data={data.hero}
          heroImg={heroObject1}
          backgroundKey="customSoftwareDev"
        />
        <Results />
        <Technologies />

        <div className="sectionWrapper">
          <ServicesList services={SERVICES} href={ROUTES.softwareDev.root} />
        </div>

        <div className="sectionWrapper">
          <CaseStudies />
        </div>
        <Engagement />
        <Solutions />
        <Industries />
      </Layout>
    </>
  );
}
