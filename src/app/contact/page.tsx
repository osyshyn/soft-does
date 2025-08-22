import data from "@shared/texts/contact/index.json";

import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Contacts } from "@sections/contactPage/contacts";

import HeroImg from "@assets/images/contact/hero.png";
import s from "./contact.module.scss";
import { HideContacts } from "providers/NoContactProvider";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.contact.title,
    description: seo.contact.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.contact}`,
    },
    openGraph: {
      title: seo.contact.openGraph.title,
      description: seo.contact.openGraph.description,
      url: seo.contact.openGraph.url,
      images: seo.contact.openGraph.images,
      type: seo.contact.openGraph.type as "website",
    },
    twitter: {
      title: seo.contact.twitter.title,
      description: seo.contact.twitter.description,
      images: seo.contact.twitter.images,
    },
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Us",
    url: "https://softdoes.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com",
      logo: "https://softdoes.com/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-213-401-9311",
          contactType: "Customer Service",
          areaServed: "US",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "hello@softdoes.com",
          contactType: "Project Inquiries",
          areaServed: "Worldwide",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "careers@softdoes.com",
          contactType: "Careers",
          areaServed: "Worldwide",
          availableLanguage: "English",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main St",
        addressLocality: "Kansas City",
        addressRegion: "KS",
        postalCode: "66101",
        addressCountry: "US",
      },
    },
    description:
      "Reach out to SoftDoes for project inquiries, career opportunities, or general questions. We're here to assist you with your software development needs.",
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
          name: "Contact Us",
          item: "https://softdoes.com/contact",
        },
      ],
    },
  };

  return (
    <HideContacts>
      <Layout talkToUs={false} faq={false} contacts={false}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Hero
          data={data.hero}
          heroImg={HeroImg}
          backgroundKey="turquoise"
          isDynamicImage
          heroImgClassName={s.heroImg}
          textContainerClassName={s.textContainer}
        />
        <Contacts data={data.contacts} />
      </Layout>
    </HideContacts>
  );
}
