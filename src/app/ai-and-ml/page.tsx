import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import data from "@shared/texts/ai-and-ml/index.json";

import HeroImage from "@assets/images/aiml/hero-x2.png";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.aiAndMl.title,
    description: seo.aiAndMl.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.aiAndMl.root}`,
    },
  };
}

import {
  AiDev,
  MlMD,
  AiDPAuto,
  AiOperation,
  CaiSolutions,
} from "@assets/icons/services/ai-and-ml/icons";
import { ServicesList } from "@sections/services-list/services-list";
import s from "@styles/pages/ai-and-ml.module.scss";

const content = [
  {
    image: <CaiSolutions />,
    title: "Custom AI Solutions",
    text: "Tailored AI applications designed to meet specific business needs.",
    link: ROUTES.aiAndMl.caiSolutions,
  },
  {
    image: <MlMD />,
    title: "Machine Learning Model Development",
    text: "Create predictive models that drive informed decision-making.",
    link: ROUTES.aiAndMl.mlMD,
  },
  {
    image: <AiOperation />,
    title: "AI Operationalization",
    text: "Transform AI models into scalable, production-ready systems.",
    link: ROUTES.aiAndMl.aiOperation,
  },
  {
    image: <AiDPAuto />,
    title: "AI-Driven Process Automation",
    text: "Streamline operations with intelligent automation solutions.",
    link: ROUTES.aiAndMl.aiDPAuto,
  },
  {
    image: <AiDev />,
    title: "Artificial Intelligence Development",
    text: "Integrate AI solutions to enhance business processes.",
    link: ROUTES.aiAndMl.aiDev,
  },
];

export default function Aiml() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI & Machine Learning Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/ai-and-ml",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "SoftDoes offers comprehensive AI & Machine Learning services, including custom AI solutions, machine learning model development, AI-driven process automation, and AI operationalization, tailored to meet your business needs.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/ai-and-ml",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to leverage AI and machine learning for business transformation"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/ai-and-ml",
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
          "name": "AI & Machine Learning",
          "item": "https://softdoes.com/ai-and-ml"
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
        data={data.hero}
        heroImg={HeroImage}
        backgroundKey="aiml"
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
        isDynamicImage
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
