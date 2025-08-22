import { Metadata } from "next";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
// import { Hero } from "@sections/dse/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import {
  Data,
  Analytics,
  Secure,
  View,
} from "@assets/icons/services/dse/icons";

import data from "@shared/texts/data-science-and-engineering/index.json";

import s from "@styles/pages/data-science-and-engineering.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.dataScience.title,
    description: seo.dataScience.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.dataScnAndEngnrng.root}`,
    },
  };
}

const content = [
  {
    image: <Data />,
    title: "Data Science Services",
    text: "Unlock insights with advanced analytics and data modeling.",
    link: ROUTES.dataScnAndEngnrng.dataScience,
  },
  {
    image: <Analytics />,
    title: "Data Analytics Solutions",
    text: "Transform raw data into actionable insights for strategic decision-making.",
    link: ROUTES.dataScnAndEngnrng.dataAnalytics,
  },
  {
    image: <Secure />,
    title: "Enterprise Data Management",
    text: "Optimize your data assets across the organization.",
    link: ROUTES.dataScnAndEngnrng.enterpriseData,
  },
  {
    image: <View />,
    title: "Data Strategy and Governance",
    text: "Establish robust data governance frameworks to ensure data integrity and compliance.",
    link: ROUTES.dataScnAndEngnrng.dataStrategy,
  },
];

import HeroImg from "@assets/images/dse/heroObject.png";

export default function DSE() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Data Science & Engineering Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/data-science-and-engineering",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "SoftDoes offers comprehensive Data Science & Engineering services, including Data Science Services, Data Analytics Solutions, Enterprise Data Management, and Data Strategy and Governance, tailored to meet your business needs.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/data-science-and-engineering",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to leverage data science and engineering for business transformation"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/data-science-and-engineering",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://softdoes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Data Science & Engineering",
          "item": "https://softdoes.com/data-science-and-engineering"
        }
      ]
    }
  }

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
        backgroundKey="dse"
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
