import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/hero/hero";
import { Solutions } from "@sections/solutions/solutions";
import { Industries } from "@sections/services/industries/industries";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Portfolio } from "@sections/services/portfolio/portfolio";
import HeroImg from "@assets/images/industries/hero.png";
import Layout from "@shared/components/layout/layout";
import data from "@shared/texts/industries/index.json";
import { Engagement } from "@sections/engagement-options/engagement-options";

import s from "./industries.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.industries.title,
    description: seo.industries.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.industries}`,
    },
  };
}

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries",
    "url": "https://softdoes.com/industries",
    "description": "Explore the diverse industries SoftDoes serves, including finance, healthcare, education, construction, technology, startups, compliance, and energy. Learn how our tailored software solutions drive innovation and efficiency across various sectors.",
    "mainEntity": {
      "@type": "Organization",
      "name": "SoftDoes",
      "url": "https://softdoes.com",
      "logo": "https://softdoes.com/logo.png",
      "sameAs": "https://www.linkedin.com/company/softdoes",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-913-787-7997",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main St",
        "addressLocality": "Kansas City",
        "addressRegion": "KS",
        "postalCode": "66101",
        "addressCountry": "US"
      }
    },
    "industry": [
      "Finance",
      "Healthcare",
      "Education",
      "Construction",
      "Technology",
      "Startups",
      "Compliance",
      "Energy"
    ],
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
          "name": "Industries",
          "item": "https://softdoes.com/industries"
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
        backgroundKey="pink"
        isDynamicImage
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
      />
      <Industries />
      <Solutions />
      <Testimonials />
      <Engagement />

      <div className="sectionWrapper">
        <Portfolio />
      </div>
    </Layout>
  );
}
