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

import s from "@styles/pages/architecture-consulting.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.title,
    description: seo.architectureConsulting.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.root}`,
    },
    openGraph: {
      title: seo.architectureConsulting.openGraph.title,
      description: seo.architectureConsulting.openGraph.description,
      url: seo.architectureConsulting.openGraph.url,
      images: seo.architectureConsulting.openGraph.images,
      type: seo.architectureConsulting.openGraph.type as "website",
    },
    twitter: {
      title: seo.architectureConsulting.twitter.title,
      description: seo.architectureConsulting.twitter.description,
      images: seo.architectureConsulting.twitter.images,
    },
  };
}

const content = [
  {
    image: <GraphIcon />,
    title: "Business Analytics",
    text: "Data-driven insights to support strategic planning.",
    link: ROUTES.architectureConsulting.businessAnalytics,
  },
  {
    image: <ComputerIcon />,
    title: "IT Consulting",
    text: "Expert advice to optimize your IT strategy and infrastructure.",
    link: ROUTES.architectureConsulting.itConsulting,
  },
  {
    image: <ButterflyIcon />,
    title: "Digital Transformation",
    text: "Guidance to successfully navigate your digital journey.",
    link: ROUTES.architectureConsulting.digitalTransformation,
  },
  {
    image: <ListIcon />,
    title: "Product Management",
    text: "End-to-end management of product development lifecycles.",
    link: ROUTES.architectureConsulting.productManagement,
  },

  {
    image: <StarIcon />,
    title: "Product Ownership",
    text: "Strategic oversight of product vision and execution.",
    link: ROUTES.architectureConsulting.productOwnership,
  },
  {
    image: <PencilIcon />,
    title: "Database Design & Development",
    text: "Robust solutions for efficient data storage and retrieval.",
    link: ROUTES.architectureConsulting.databaseDesign,
  },
  {
    image: <CodeIcon />,
    title: "Code Audits",
    text: "Comprehensive reviews to improve code quality and performance.",
    link: ROUTES.architectureConsulting.codeAudits,
  },
];

import HeroImg from "@assets/images/architecture-consulting/hero_object.png";
import { Metadata } from "next";

export default function DSE() {
  return (
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
        <ServicesList services={content} />
      </div>

      <div className="sectionWrapper">
        <CaseStudies />
      </div>
      <Engagement />
      <Solutions />
    </Layout>
  );
}
