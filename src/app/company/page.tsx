import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/companyPage/results/results";
import { Stats } from "@sections/companyPage/stats/stats";
import { Steps } from "@sections/companyPage/steps/steps";

import HeroImage from "@assets/images/company/hero.png";
import data from "@shared/texts/company/index.json";

import s from "./company.module.scss";

import Layout from "@shared/components/layout/layout";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.company.title,
    description: seo.company.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.company}`,
    },
    openGraph: {
      title: seo.company.openGraph.title,
      description: seo.company.openGraph.description,
      url: seo.company.openGraph.url,
      images: seo.company.openGraph.images,
      type: seo.company.openGraph.type as "website",
    },
    twitter: {
      title: seo.company.twitter.title,
      description: seo.company.twitter.description,
      images: seo.company.twitter.images,
    },
  };
}

export default function Company() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SoftDoes",
    url: "https://softdoes.com/company",
    logo: "https://softdoes.com/logo.png",
    sameAs: "https://www.linkedin.com/company/softdoes",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-913-787-7997",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    description:
      "SoftDoes is a Kansas-based software development company specializing in custom software solutions, AI & machine learning, cloud services, data science, UI/UX design, and architecture consulting. With over 25,000 projects completed and a client base of over 300, SoftDoes delivers scalable and reliable software tailored to business needs.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Orest",
      jobTitle: "Founder & CEO",
    },
    foundingDate: "2018-03-01",
    employee: {
      "@type": "Organization",
      name: "SoftDoes",
    },
    department: {
      "@type": "Organization",
      name: "Software Development",
    },
    award: "12+",
    numberOfEmployees: "50-200",
    mainEntityOfPage: "https://softdoes.com/company",
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
          name: "Company",
          item: "https://softdoes.com/company",
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

      <div className={"sectionWrapper"}>
        <Hero
          data={data.hero}
          heroImg={HeroImage}
          backgroundKey="turquoise"
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
          isDynamicImage
        />
      </div>

      <div className={"sectionWrapper"}>
        <Results />
      </div>

      <div className={"sectionWrapper"}>
        <Stats />
      </div>

      <Steps />
    </Layout>
  );
}
