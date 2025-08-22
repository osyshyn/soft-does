import data from "@shared/texts/ui-ux-design/userID.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import HeroObj from "@assets/images/uiux/uiuxServices/heroObj_userID.png";
import s from "./user-interface-design.module.scss";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.uiUxDesign.userID.title,
    description: seo.uiUxDesign.userID.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.uiUxDesign.userID}`,
    },
  };
}

export default function UserID() {
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
        url: "https://softdoes.com/ui-ux-design/user-interface-design",
        name: "User Interface Design Services | SoftDoes",
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
              name: "UI/UX Design",
              item: "https://softdoes.com/ui-ux-design",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "User Interface Design",
              item: "https://softdoes.com/ui-ux-design/user-interface-design",
            },
          ],
        },
        mainEntity: {
          "@type": "Service",
          "@id":
            "https://softdoes.com/ui-ux-design/user-interface-design#service",
          serviceType: "User Interface Design Services",
          provider: { "@id": "https://softdoes.com/#organization" },
          description:
            "SoftDoes provides user interface design services, crafting intuitive, visually appealing interfaces for web and mobile applications.",
          audience: {
            "@type": "BusinessAudience",
            industry: ["SaaS", "Retail", "Healthcare", "Finance"],
          },
          offers: {
            "@type": "Offer",
            url: "https://softdoes.com/ui-ux-design/user-interface-design",
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
        backgroundKey="uiUxUserID"
        isDynamicImage={false}
        heroImgClassName={s.heroImg}
        textContainerClassName={s.textContainer}
      />
      <Results />
      <Technologies />
      <Testimonials />
      <Engagement />
      <Solutions />
    </Layout>
  );
}
