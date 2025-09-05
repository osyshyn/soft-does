import data from "@texts/main/index";
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

import Certificates from "@sections/home/certificates/certificates";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.home.title,
    description: seo.home.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.root}`,
    },
    openGraph: {
      title: seo.home.openGraph.title,
      description: seo.home.openGraph.description,
      url: seo.home.openGraph.url,
      images: seo.home.openGraph.images,
      type: seo.home.openGraph.type as "website",
    },
    twitter: {
      title: seo.home.twitter.title,
      description: seo.home.twitter.description,
      images: seo.home.twitter.images,
    },
  };
}

export default function Home() {
  const serviceSections = [
    {
      link: ROUTES.softwareDev.root,
      currentColor: "#173B91",
      img: softwareDevelopment,
      isImagePriority: true,
      isRight: false,
      data: data.softwareDevelopment,
      hasWrapper: true,
    },
    {
      link: ROUTES.aiAndMl.root,
      currentColor: "#D75186",
      img: aiAndMachineLearning,
      isImagePriority: true,
      isRight: true,
      data: data.aiMachineLearning,
      hasWrapper: false,
    },
    {
      link: ROUTES.cloudServices.root,
      currentColor: "#F28B82",
      img: cloudServices,
      isImagePriority: false,
      isRight: false,
      data: data.cloudServices,
      hasWrapper: false,
    },
    {
      link: ROUTES.dataScnAndEngnrng.root,
      currentColor: "#BF81FF",
      img: dataScienceAndEngeneering,
      isImagePriority: false,
      isRight: true,
      data: data.dataScienceAndEngeneering,
      hasWrapper: false,
    },
    {
      link: ROUTES.uiUxDesign.root,
      currentColor: "#2741FF",
      img: uiUxDesign,
      isImagePriority: false,
      isRight: false,
      data: data.uiUxDesign,
      hasWrapper: false,
    },
    {
      link: ROUTES.architectureConsulting.root,
      currentColor: "#515151",
      img: architectureAndConsulting,
      isImagePriority: false,
      isRight: true,
      data: data.architectureAndConsulting,
      hasWrapper: true,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://softdoes.com/#organization",
        name: "SoftDoes",
        url: "https://softdoes.com/",
        logo: "https://softdoes.com/images/logo.png",
        areaServed: ["US"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+12134019311",
          email: "hello@softdoes.com",
          availableLanguage: ["English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Software Development",
              itemListElement: [
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/web-app-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web App Development & Custom Solutions | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/mvp-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "MVP & Product Prototype Development Services | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/custom-software-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Software & App Development Services | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/product-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "Product Development & Engineering Services | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/mobile-app-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development Services & Solutions | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/software-development/api-integration-services",
                  itemOffered: {
                    "@type": "Service",
                    name: "Systems Integration & API Solutions Services | SoftDoes",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "AI & ML",
              itemListElement: [
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ai-and-ml/ai-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Development & Custom Solutions | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ai-and-ml/ai-operationalization",
                  itemOffered: {
                    "@type": "Service",
                    name: "Operationalizing Machine Learning for Business | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ai-and-ml/ml-model-development",
                  itemOffered: {
                    "@type": "Service",
                    name: "ML Model Development & Predictive Solutions | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ai-and-ml/ai-driven-process-automation",
                  itemOffered: {
                    "@type": "Service",
                    name: "Intelligent Process Automation Solutions | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ai-and-ml/custom-ai-solutions",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom AI Solutions for Business Innovation | SoftDoes",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Cloud Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/cloud-services/managed-cloud-services",
                  itemOffered: {
                    "@type": "Service",
                    name: "Managed Cloud Services & Infrastructure Support | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/cloud-services/devops-and-cloud-infrastructure",
                  itemOffered: {
                    "@type": "Service",
                    name: "DevOps & Cloud Infrastructure as Code Setup | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/cloud-services/cloud-migration-services",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cloud Migration Services & Data Specialists | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/cloud-services/cloud-computing-solutions",
                  itemOffered: {
                    "@type": "Service",
                    name: "Enterprise Cloud Computing & Secure Solutions | SoftDoes",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "UI/UX Design",
              itemListElement: [
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ui-ux-design/user-interface-design",
                  itemOffered: {
                    "@type": "Service",
                    name: "User Interface Design Services for Web & Mobile | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ui-ux-design/user-experience-design",
                  itemOffered: {
                    "@type": "Service",
                    name: "User & Customer Experience Design Services | SoftDoes",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://softdoes.com/ui-ux-design/product-design-services",
                  itemOffered: {
                    "@type": "Service",
                    name: "Product Design Services for Web & Mobile | SoftDoes",
                  },
                },
              ],
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://softdoes.com/#website",
        url: "https://softdoes.com/",
        name: "SoftDoes",
        publisher: { "@id": "https://softdoes.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.google.com/search?q=site:softdoes.com+{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        url: "https://softdoes.com/",
        name: "Custom Software & Digital Transformation | SoftDoes",
        description:
          "SoftDoes delivers best software development services—from digital transformation to custom enterprise solutions—with dedicated development teams and consulting",
        isPartOf: { "@id": "https://softdoes.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://softdoes.com/",
            },
          ],
        },
        areaServed: ["US"],
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

      <div className="sectionWrapper">
        {serviceSections.map((section) => (
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
  );
}
