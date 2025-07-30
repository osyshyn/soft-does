import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import {
  ButterflyIcon,
  ComputerIcon,
  ListIcon,
  StarIcon,
  CodeIcon,
  PencilIcon,
  GraphIcon,
} from "@assets/icons/services/architecture-consulting";

import data from "@shared/texts/architecture-consulting/index.json";

import s from "./architecture-consulting.module.scss";

const content = [
  {
    image: <GraphIcon />,
    title: "Business Analytics",
    text: "Data-driven insights to support strategic planning.",
    link: "/",
  },
  {
    image: <ComputerIcon />,
    title: "IT Consulting",
    text: "Expert advice to optimize your IT strategy and infrastructure.",
    link: "/",
  },
  {
    image: <ButterflyIcon />,
    title: "Digital Transformation",
    text: "Guidance to successfully navigate your digital journey.",
    link: "/",
  },
  {
    image: <ListIcon />,
    title: "Product Management",
    text: "End-to-end management of product development lifecycles.",
    link: "/",
  },

  {
    image: <StarIcon />,
    title: "Product Ownership",
    text: "Strategic oversight of product vision and execution.",
    link: "/",
  },
  {
    image: <PencilIcon />,
    title: "Database Design & Development",
    text: "Robust solutions for efficient data storage and retrieval.",
    link: "/",
  },
  {
    image: <CodeIcon />,
    title: "Code Audits",
    text: "Comprehensive reviews to improve code quality and performance.",
    link: "/",
  },
];

import HeroImg from "@assets/images/architecture-consulting/hero_object.png";

export default function DSE() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.dataScnAndEngnrng.root}
      />
      <Layout>
        <Hero
          isDynamicImage
          data={data.hero}
          heroImg={HeroImg}
          backgroundKey="architectureConsulting"
          textContainerClassName={s.textContainer}
          heroImgClassName={s.heroImg}
        />
        <Results />
        <Technologies />
        <div className="sectionWrapper">
          <ServicesList
            services={content}
            href={ROUTES.dataScnAndEngnrng.root}
          />
        </div>
        <CaseStudies />
        <Engagement />
        <Solutions />
      </Layout>
    </>
  );
}
