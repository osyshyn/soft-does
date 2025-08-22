import data from "@shared/texts/cloud/cms.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/cloud/services/cms_object.png";

import s from "./cloud-migration-services.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.cloudServices.cloudMigration.title,
    description: seo.cloudServices.cloudMigration.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.cloudServices.cloudMigration}`,
    },
    openGraph: {
      title: seo.cloudServices.cloudMigration.openGraph.title,
      description: seo.cloudServices.cloudMigration.openGraph.description,
      url: seo.cloudServices.cloudMigration.openGraph.url,
      images: seo.cloudServices.cloudMigration.openGraph.images,
      type: seo.cloudServices.cloudMigration.openGraph.type as "website",
    },
    twitter: {
      title: seo.cloudServices.cloudMigration.twitter.title,
      description: seo.cloudServices.cloudMigration.twitter.description,
      images: seo.cloudServices.cloudMigration.twitter.images,
    },
  };
}

export default function CMS() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Migration Services",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/cloud-services/cloud-migration-services",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    description:
      "SoftDoes offers comprehensive cloud migration services, including assessment, planning, execution, and post-migration support, ensuring seamless transition to cloud environments with minimal disruption.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Varies based on project scope",
      eligibleRegion: {
        "@type": "Place",
        name: "United States",
      },
      url: "https://softdoes.com/cloud-services/cloud-migration-services",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking to migrate to cloud platforms",
    },
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/cloud-services/cloud-migration-services",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://softdoes.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cloud Services",
          item: "https://softdoes.com/cloud-services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cloud Migration Services",
          item: "https://softdoes.com/cloud-services/cloud-migration-services",
        },
      ],
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Alex Johnson",
      },
      datePublished: "2023-12-22",
      reviewBody:
        "Orest was a pleasure to work with. He was very diligent, smart, technically competent, and patient as we worked through our Airtable project on successfully getting an eCommerce ERP together in Airtable.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    industry: "Information Technology",
    providerMobility: "cloud",
    serviceOutput: "Cloud migration solutions tailored to business needs",
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
        backgroundKey="cloudCMS"
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
