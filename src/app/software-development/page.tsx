import { Metadata } from "next";
import { ROUTES } from "@shared/constants/routes";

import data from "@shared/texts/softwareDev/index.json";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
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
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/software-development",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "SoftDoes offers comprehensive software development services, including custom software development, mobile app development, web application development, MVP development, product development, and API integration services. We specialize in delivering scalable, reliable, and high-performance software solutions tailored to meet your business objectives.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/software-development",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to develop custom software solutions"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/software-development",
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
          "name": "Software Development",
          "item": "https://softdoes.com/software-development"
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
