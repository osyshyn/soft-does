import dynamic from "next/dynamic";

import { Certificates } from "@sections/home/certificates/certificates";
import { ServiceSection } from "@sections/home/service-section/service-section";
import { AboutUs } from "@sections/home/about-us/about-us";

import Layout from "@shared/components/layout/layout";
import { ContactUsHero } from "@sections/home/contact-us-hero/contactUsHero";
import { ServicesSections } from "@shared/constants";

const Testimonials = dynamic(
  () => import("@sections/testimonials/testimonials")
);

const Industries = dynamic(
  () => import("@sections/services/industries/industries")
);
const CaseStudies = dynamic(
  () => import("@sections/case-studies/case-studies")
);

export default function Home() {
  return (
    <>
      <Layout isLanding={true}>
        <ContactUsHero
          title={"Your App. The First Version. By Tomorrow."}
          subtitle={
            "We’ll design and build the first working version of your app in just 24 hours — mobile, web, or both."
          }
        />

        <Certificates />

        <div className="sectionWrapper">
          {ServicesSections.map((section) => (
            <ServiceSection
              key={section.link}
              link={section.link}
              currentColor={section.currentColor}
              img={section.img}
              isImagePriority={section.isImagePriority}
              isRight={section.isRight}
              {...section.data}
              className="separateSectionWrapper"
            />
          ))}
        </div>

        <div className="pageWrapper">
          <Testimonials />

          <AboutUs className="sectionWrapper" />

          <Industries />
        </div>

        <CaseStudies />
      </Layout>
    </>
  );
}
