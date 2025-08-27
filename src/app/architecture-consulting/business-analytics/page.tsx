import data from "@shared/texts/architecture-consulting/business-analytics.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/ba_object.png";
import s from "./business-analytics.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.businessAnalytics.title,
    description: seo.architectureConsulting.businessAnalytics.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.businessAnalytics}`,
    },
    openGraph: {
      title: seo.architectureConsulting.businessAnalytics.openGraph.title,
      description:
        seo.architectureConsulting.businessAnalytics.openGraph.description,
      url: seo.architectureConsulting.businessAnalytics.openGraph.url,
      images: seo.architectureConsulting.businessAnalytics.openGraph.images,
      type: seo.architectureConsulting.businessAnalytics.openGraph
        .type as "website",
    },
    twitter: {
      title: seo.architectureConsulting.businessAnalytics.twitter.title,
      description:
        seo.architectureConsulting.businessAnalytics.twitter.description,
      images: seo.architectureConsulting.businessAnalytics.twitter.images,
    },
  };
}

export default function BusinessAnalytics() {
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
        url: "https://softdoes.com/architecture-consulting/business-analytics",
        name: "Business Analytics Services | SoftDoes",
        description:
          "Custom business analytics services including intelligent automation, intelligent chatbots, and intelligent workflows. SoftDoes delivers cutting-edge business analytics services.",
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Business Analytics",
              item: "https://softdoes.com/architecture-consulting/business-analytics/",
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
        data={data.hero}
        heroImg={HeroObj}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
        backgroundKey="architectureBA"
        isDynamicImage
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
