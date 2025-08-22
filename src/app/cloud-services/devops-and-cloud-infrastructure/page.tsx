import data from "@shared/texts/cloud/dci.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/cloud/services/dci_object.png";
import s from "./devops-and-cloud-infrastructure.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.cloudServices.devOps.title,
    description: seo.cloudServices.devOps.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.cloudServices.devOps}`,
    },
    openGraph: {
      title: seo.cloudServices.devOps.openGraph.title,
      description: seo.cloudServices.devOps.openGraph.description,
      url: seo.cloudServices.devOps.openGraph.url,
      images: seo.cloudServices.devOps.openGraph.images,
      type: seo.cloudServices.devOps.openGraph.type as "website",
    },
    twitter: {
      title: seo.cloudServices.devOps.twitter.title,
      description: seo.cloudServices.devOps.twitter.description,
      images: seo.cloudServices.devOps.twitter.images,
    },
  };
}

export default function DCI() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://softdoes.com/#organization",
        "@type": "Organization",
        name: "SoftDoes",
        url: "https://softdoes.com/",
        logo: "https://softdoes.com/logo.png",
        description:
          "SoftDoes is a trusted software development and tech consulting firm offering custom software, AI, cloud, data engineering and DevOps services.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@softdoes.com",
          telephone: "+1-000-000-0000",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.linkedin.com/company/softdoes/",
          "https://twitter.com/softdoes",
          "https://www.facebook.com/softdoes",
        ],
      },
      {
        "@type": "WebPage",
        url: "https://softdoes.com/cloud-services/devops-and-cloud-infrastructure",
        name: "DevOps & Cloud Infrastructure | SoftDoes",
        isPartOf: { "@id": "https://softdoes.com/#organization" },
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
              name: "Cloud Services",
              item: "https://softdoes.com/cloud-services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "DevOps & Cloud Infrastructure",
              item: "https://softdoes.com/cloud-services/devops-and-cloud-infrastructure",
            },
          ],
        },
        mainEntity: {
          "@type": "Service",
          "@id":
            "https://softdoes.com/cloud-services/devops-and-cloud-infrastructure#service",
          serviceType: "DevOps & Cloud Infrastructure Services",
          provider: { "@id": "https://softdoes.com/#organization" },
          description:
            "Comprehensive DevOps and cloud infrastructure setup, providing infrastructure as code, CI/CD pipelines, and automated scalable hosting environments.",
          areaServed: ["US", "Canada"],
          audience: {
            "@type": "BusinessAudience",
            industry: ["Technology", "Finance", "Healthcare", "E-commerce"],
          },
          offers: {
            "@type": "Offer",
            url: "https://softdoes.com/cloud-services/devops-and-cloud-infrastructure",
            price: "On request",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
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
        backgroundKey="cloudDCI"
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
