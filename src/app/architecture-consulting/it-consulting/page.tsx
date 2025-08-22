import data from "@shared/texts/architecture-consulting/it-consulting.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/architecture-consulting/services/itc_object.png";
import s from "./it-consulting.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.architectureConsulting.itConsulting.title,
    description: seo.architectureConsulting.itConsulting.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.architectureConsulting.itConsulting}`,
    },
  };
}

export default function ITConsulting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Consulting Services",
    provider: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com/architecture-consulting/it-consulting",
      logo: "https://softdoes.com/logo.png",
      sameAs: "https://www.linkedin.com/company/softdoes",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-913-787-7997",
        contactType: "Customer Service",
        availableLanguage: "English",
      },
    },
    description:
      "Expert IT consulting services to help businesses optimize their technology infrastructure, enhance system performance, and drive digital transformation.",
    offers: {
      "@type": "Offer",
      url: "https://softdoes.com/architecture-consulting/it-consulting",
      priceCurrency: "USD",
      price: "Pricing based on project scope",
      eligibleRegion: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Businesses seeking to optimize their IT infrastructure and implement digital transformation strategies",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    additionalType: "https://schema.org/ProfessionalService",
    mainEntityOfPage:
      "https://softdoes.com/architecture-consulting/it-consulting",
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
          name: "Architecture & Consulting Services",
          item: "https://softdoes.com/architecture-consulting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "IT Consulting",
          item: "https://softdoes.com/architecture-consulting/it-consulting",
        },
      ],
    },
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
        backgroundKey="architectureIT"
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
