import data from "@texts/main/index.json";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { ROUTES } from "@shared/constants/routes";
import { Hero } from "@sections/home/hero/hero";
import { ServiceSection } from "@sections/home/service-section/service-section";
import { AboutUs } from "@sections/home/about-us/about-us";

import softwareDevelopment from "@assets/images/main/software-development.png";
import aiAndMachineLearning from "@assets/images/main/ai-machine-learning.png";
import cloudServices from "@assets/images/main/cloud-services.png";
import dataScienceAndEngeneering from "@assets/images/main/data-science.png";
import uiUxDesign from "@assets/images/main/ui-ux-design.png";
import architectureAndConsulting from "@assets/images/main/architecture-and-consulting.png";

import Layout from "@shared/components/layout/layout";

const Testimonials = dynamic(
  () => import("@sections/testimonials/testimonials")
);
const Industries = dynamic(
  () => import("@sections/services/industries/industries")
);
const CaseStudies = dynamic(
  () => import("@sections/case-studies/case-studies")
);
const Certificates = dynamic(
  () => import("@sections/home/certificates/certificates")
);

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.home.title,
    description: seo.home.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.root}`,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Certificates />
      <ServiceSection
        isImagePriority
        link={ROUTES.softwareDev.root}
        currentColor="#173B91"
        img={softwareDevelopment}
        {...data.softwareDevelopment}
      />
      <ServiceSection
        link={ROUTES.aiAndMl.root}
        isImagePriority
        currentColor="#D75186"
        img={aiAndMachineLearning}
        isRight
        {...data.aiMachineLearning}
      />
      <ServiceSection
        link={ROUTES.cloudServices.root}
        currentColor="#F28B82"
        img={cloudServices}
        {...data.cloudServices}
      />
      <ServiceSection
        link={ROUTES.dataScnAndEngnrng.root}
        currentColor="#BF81FF"
        img={dataScienceAndEngeneering}
        isRight
        {...data.dataScienceAndEngeneering}
      />
      <ServiceSection
        link={ROUTES.uiUxDesign.root}
        currentColor="#2741FF"
        img={uiUxDesign}
        {...data.uiUxDesign}
      />

      <div className="sectionWrapper">
        <ServiceSection
          link={ROUTES.architectureConsulting.root}
          currentColor="#515151"
          img={architectureAndConsulting}
          isRight
          {...data.architectureAndConsulting}
        />
      </div>
      <Testimonials />
      <AboutUs />

      <Industries />
      <CaseStudies />
    </Layout>
  );
}
