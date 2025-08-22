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
    openGraph: {
      title: "Custom Software & Digital Transformation | SoftDoes",
      description: "SoftDoes delivers best software development services—from digital transformation to custom enterprise solutions—with dedicated development teams and consulting",
      url: "https://softdoes.com/",
      siteName: "SoftDoes",
      images: [
        {
          url: "https://softdoes.com/images/logo.png",
        },
        {
          url: "https://softdoes.com/images/logo.png",
          width: 180,
          height: 110,
        },
        {
          url: "https://softdoes.com/images/logo.png",
          width: 600,
          height: 315,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@softdoes",
      creator: "@softdoes",
      title: "Custom Software & Digital Transformation | SoftDoes",
      description: "SoftDoes delivers best software development services—from digital transformation to custom enterprise solutions—with dedicated development teams and consulting",
      images: ["https://softdoes.com/images/logo.png"],
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "SoftDoes",
        legalName: "SoftDoes LLC",
        url: "https://softdoes.com/",
        logo: "https://softdoes.com/logo.png",
        description:
          "SoftDoes is a trusted software development and tech consulting firm offering custom software, AI, cloud, data engineering and DevOps services.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kansas City",
          addressRegion: "MO",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@softdoes.com",
          telephone: "+1-000-000-0000",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.linkedin.com/company/softdoes/",
          "https://twitter.com/softdoes",
          "https://www.facebook.com/softdoes",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://softdoes.com/",
        name: "SoftDoes – Software Development Services",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://softdoes.com/search/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        url: "https://softdoes.com/",
        name: "SoftDoes – Custom Software & Consulting",
        isPartOf: {
          "@id": "https://softdoes.com/#website",
        },
        mainEntity: {
          "@id": "https://softdoes.com/#organization",
        },
      },
      {
        "@type": "Service",
        serviceType: "Custom Software Development",
        description:
          "Full-cycle web, mobile and enterprise custom software development tailored to unique business needs.",
        provider: { "@id": "https://softdoes.com/#organization" },
      },
      {
        "@type": "Service",
        serviceType: "AI & Machine Learning Solutions",
        description:
          "AI, machine learning and automation solutions for predictive insights and intelligent workflows.",
        provider: { "@id": "https://softdoes.com/#organization" },
      },
      {
        "@type": "Service",
        serviceType: "Cloud Infrastructure & DevOps",
        description:
          "Cloud migration, infrastructure automation, CI/CD pipelines and managed cloud services.",
        provider: { "@id": "https://softdoes.com/#organization" },
      },
      {
        "@type": "Service",
        serviceType: "Data Engineering & Analytics",
        description:
          "Data pipeline design, data warehouses, analytics dashboards, real-time and predictive analytics solutions.",
        provider: { "@id": "https://softdoes.com/#organization" },
      },
    ],
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
