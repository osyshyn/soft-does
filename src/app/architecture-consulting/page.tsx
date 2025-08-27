import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/results/results";
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
      },
      {
        "@type": "WebPage",
        url: "https://softdoes.com/architecture-consulting",
        name: "Enterprise & Software Architecture Services | SoftDoes",
        description:
          "SoftDoes provides enterprise architecture services, software & system architecture consulting, and cloud architecture solutions to optimize your IT strategy",
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Architecture Consulting",
              item: "https://softdoes.com/architecture-consulting/",
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
