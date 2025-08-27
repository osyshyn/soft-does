import data from "@texts/main/index";
import dynamic from "next/dynamic";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import { Certificates } from "@sections/home/certificates/certificates";
import { ServiceSection } from "@sections/home/service-section/service-section";
import { AboutUs } from "@sections/home/about-us/about-us";

import softwareDevelopment from "@assets/images/main/software-development.png";
import aiAndMachineLearning from "@assets/images/main/ai-machine-learning.png";
import cloudServices from "@assets/images/main/cloud-services.png";
import dataScienceAndEngeneering from "@assets/images/main/data-science.png";
import uiUxDesign from "@assets/images/main/ui-ux-design.png";
import architectureAndConsulting from "@assets/images/main/architecture-and-consulting.png";

import Layout from "@shared/components/layout/layout";
import { ContactUsHero } from "@sections/home/contact-us-hero/contactUsHero";

const Testimonials = dynamic(
  () => import("@sections/testimonials/testimonials")
);

const Industries = dynamic(
  () => import("@sections/services/industries/industries")
);
const CaseStudies = dynamic(
  () => import("@sections/case-studies/case-studies")
);
const ContactsForm = dynamic(() => import("@sections/contact/form/form"));

export default function Home() {
  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.root}
      />
      <Layout isLanding={true}>
        <ContactUsHero />
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
        <ContactsForm />
        <Industries />
        <CaseStudies />
      </Layout>
    </>
  );
}
