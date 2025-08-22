import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Testimonials } from "@sections/testimonials/testimonials";
import data from "@shared/texts/ui-ux-design/index.json";

import { User, Interface, Light } from "@assets/icons/services/uiux/icons";
import { ServicesList } from "@sections/services-list/services-list";

import s from "@styles/pages/ui-ux-design.module.scss";

import HeroImg from "@assets/images/uiux/heroObject1.png";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.uiUxDesign.title,
    description: seo.uiUxDesign.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.uiUxDesign.root}`,
    },
    openGraph: {
      title: seo.uiUxDesign.openGraph.title,
      description: seo.uiUxDesign.openGraph.description,
      url: seo.uiUxDesign.openGraph.url,
      images: seo.uiUxDesign.openGraph.images,
      type: seo.uiUxDesign.openGraph.type as "website",
    },
    twitter: {
      title: seo.uiUxDesign.twitter.title,
      description: seo.uiUxDesign.twitter.description,
      images: seo.uiUxDesign.twitter.images,
    },
  };
}

const content = [
  {
    image: <User />,
    title: "User Experience Design",
    text: "Create intuitive interfaces that enhance user satisfaction.",
    link: ROUTES.uiUxDesign.userED,
  },
  {
    image: <Interface />,
    title: "User Interface Design",
    text: "Aesthetic and functional design solutions that drive engagement.",
    link: ROUTES.uiUxDesign.userID,
  },
  {
    image: <Light />,
    title: "Product Design Services",
    text: "Innovate your product design to improve usability and ROI.",
    link: ROUTES.uiUxDesign.productDS,
  },
];

export default function Uiux() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "UI/UX Design Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/ui-ux-design",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "SoftDoes offers comprehensive UI/UX design services, including user experience design, user interface design, and product design services, tailored to meet your business needs.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/ui-ux-design",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to enhance their software user interfaces and user experiences"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/ui-ux-design",
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
          "name": "UI/UX Design",
          "item": "https://softdoes.com/ui-ux-design"
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
        heroImg={HeroImg}
        backgroundKey="uiux"
        isDynamicImage
        textContainerClassName={s.textContainer}
        heroImgClassName={s.heroImg}
      />
      <Results />
      <Technologies />
      <div className="sectionWrapper">
        <ServicesList services={content} />
      </div>
      <Engagement />
      <div className="sectionWrapper">
        <CaseStudies />
      </div>
      <Testimonials />
      <Solutions />
    </Layout>
  );
}
