import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/cloud-services/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { ServicesList } from "@sections/services-list/services-list";
import CaseStudies from "@sections/case-studies/case-studies";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";

import Layout from "@shared/components/layout/layout";

import { Up } from "@shared/assets/icons/services/cloud-services/up";
import { Gear } from "@shared/assets/icons/services/cloud-services/gear";
import { Sync } from "@shared/assets/icons/services/cloud-services/sync";
import { Lock } from "@shared/assets/icons/services/cloud-services/lock";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.cloudServices.title,
    description: seo.cloudServices.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.cloudServices.root}`,
    },
    openGraph: {
      title: seo.cloudServices.openGraph.title,
      description: seo.cloudServices.openGraph.description,
      url: seo.cloudServices.openGraph.url,
      images: seo.cloudServices.openGraph.images,
      type: seo.cloudServices.openGraph.type as "website",
    },
    twitter: {
      title: seo.cloudServices.twitter.title,
      description: seo.cloudServices.twitter.description,
      images: seo.cloudServices.twitter.images,
    },
  };
}

const SERVICES = [
  {
    image: <Up />,
    title: "Cloud Computing Solutions",
    text: "Scalable and flexible cloud environments tailored to your business needs.",
    link: ROUTES.cloudServices.ccs,
  },
  {
    image: <Gear />,
    title: "DevOps and Cloud Infrastructure",
    text: "Streamline your development and operations with integrated DevOps practices.",
    link: ROUTES.cloudServices.devOps,
  },
  {
    image: <Sync />,
    title: "Cloud Migration Services",
    text: "Seamlessly transition to the cloud with minimal disruption.",
    link: ROUTES.cloudServices.cloudMigration,
  },
  {
    image: <Lock />,
    title: "Managed Cloud Services",
    text: "Comprehensive management of your cloud infrastructure to ensure optimal performance.",
    link: ROUTES.cloudServices.managedCloud,
  },
];

export default function CloudServices() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cloud Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com/cloud-services",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    },
    "description": "SoftDoes offers comprehensive cloud services, including cloud computing solutions, DevOps and cloud infrastructure, cloud migration services, and managed cloud services, tailored to meet your business needs.",
    "offers": {
      "@type": "Offer",
      "url": "https://softdoes.com/cloud-services",
      "priceCurrency": "USD",
      "price": "Pricing based on project scope",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprises and organizations seeking to leverage cloud technologies for business transformation"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "additionalType": "https://schema.org/ProfessionalService",
    "mainEntityOfPage": "https://softdoes.com/cloud-services",
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
          "name": "Cloud Services",
          "item": "https://softdoes.com/cloud-services"
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
      <Hero />
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
