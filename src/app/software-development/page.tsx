import { Metadata } from "next";
import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/softwareDev/index.json";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";
import heroObject1 from "@assets/images/softwareDev/heroObject2.png";

import { Tags } from "@shared/assets/icons/tags";
import { Phone } from "@shared/assets/icons/phone";
import { Browser } from "@shared/assets/icons/browser";
import { Rocket } from "@shared/assets/icons/rocket";
import { Gear } from "@shared/assets/icons/gear";
import { Puzzle } from "@shared/assets/icons/puzzle";

import s from "@styles/pages/software-development.module.scss";

import Layout from "@shared/components/layout/layout";

const SERVICES = [
  {
    image: <Tags />,
    title: "Custom Software Development",
    text: "Tailor-made solutions that align with your business objectives.",
    link: ROUTES.softwareDev.customSoftDev,
  },
  {
    image: <Phone />,
    title: "Mobile App Development",
    text: "Innovative applications for Android and iOS to engage your customers.",
    link: ROUTES.softwareDev.mobileAppDev,
  },
  {
    image: <Browser />,
    title: "Web Application Development",
    text: "Robust and scalable web applications that enhance user experience.",
    link: ROUTES.softwareDev.webAppDev,
  },
  {
    image: <Rocket />,
    title: "MVP Development",
    text: "Quickly validate your ideas with Minimum Viable Products.",
    link: ROUTES.softwareDev.mvpDev,
  },
  {
    image: <Gear />,
    title: "Product Development",
    text: "Full-cycle product development from concept to launch.",
    link: ROUTES.softwareDev.productDev,
  },
  {
    image: <Puzzle />,
    title: "API Integration Services",
    text: "Seamlessly connect disparate systems to enhance functionality and data exchange.",
    link: ROUTES.softwareDev.apiIntegration,
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.title,
    description: seo.softwareDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.root}`,
    },
    openGraph: {
      title: seo.softwareDev.openGraph.title,
      description: seo.softwareDev.openGraph.description,
      url: seo.softwareDev.openGraph.url,
      images: seo.softwareDev.openGraph.images,
      type: seo.softwareDev.openGraph.type as "website",
    },
    twitter: {
      title: seo.softwareDev.twitter.title,
      description: seo.softwareDev.twitter.description,
      images: seo.softwareDev.twitter.images,
    },
  };
}

export default function SoftwareDev() {
  const prepareTagText = () => {
    return (
      <>
        <span>{"{"}we are;</span>
        <br />
        <br />
        <span>
          dedicated development teams for any business objectives{"))"}
        </span>
        <br />
        <span>{"//"}for any project stages</span>
        <br />
        <span>----</span>
      </>
    );
  };

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
        url: "https://softdoes.com/software-development",
        name: "Agile Software Development & Consulting Services | SoftDoes",
        description:
          "SoftDoes offers agile software development, custom app development, enterprise software engineering, and software development consulting for businesses",
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
              name: "Software Development",
              item: "https://softdoes.com/software-development/",
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
        data={{
          ...data.hero,
          tagText: prepareTagText(),
        }}
        heroImg={heroObject1}
        backgroundKey="customSoftwareDev"
        isDynamicImage
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
      />

      <Results />
      <Technologies />

      <div className="sectionWrapper">
        <ServicesList services={SERVICES} />
      </div>

      <div className="sectionWrapper">
        <CaseStudies />
      </div>
      <Engagement />
      <Solutions />
      <Industries />
    </Layout>
  );
}
