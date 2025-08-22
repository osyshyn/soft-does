import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/softwareServices/webAppDev/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import Layout from "@shared/components/layout/layout";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.webAppDev.title,
    description: seo.softwareDev.webAppDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.webAppDev}`,
    },
  };
}

export default function WebAppDev() {
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
          telephone: "+1-913-787-7997",
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
        url: "https://softdoes.com/software-development/web-app-development",
        name: "Web Application Development | SoftDoes",
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
              name: "Software Development",
              item: "https://softdoes.com/software-development",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Web Application Development",
              item: "https://softdoes.com/software-development/web-app-development",
            },
          ],
        },
        mainEntity: {
          "@type": "Service",
          "@id":
            "https://softdoes.com/software-development/web-app-development#service",
          serviceType: "Web App Development",
          provider: { "@id": "https://softdoes.com/#organization" },
          description:
            "Designs that captivate, experiences that deliver — custom web application development by SoftDoes.",
          audience: {
            "@type": "BusinessAudience",
            industry: ["SaaS", "Healthcare", "E-commerce", "Finance"],
          },
          offers: {
            "@type": "Offer",
            url: "https://softdoes.com/software-development/web-app-development",
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

      <Hero />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
