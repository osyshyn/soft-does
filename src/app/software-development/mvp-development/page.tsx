import { ROUTES } from "@shared/constants/routes";

import HeroImage from "@assets/images/softwareServices/heroMVPDev_object.png";
import { Hero } from "@sections/hero/hero";
import { Results } from "@sections/softwareDev/results/results";
import { Technologies } from "@sections/technologies/technologies";
import { Testimonials } from "@sections/testimonials/testimonials";
import { Engagement } from "@sections/engagement-options/engagement-options";
import { Solutions } from "@sections/solutions/solutions";

import s from "./mvp-development.module.scss";
import Layout from "@shared/components/layout/layout";

import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.softwareDev.mvpDev.title,
    description: seo.softwareDev.mvpDev.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.softwareDev.mvpDev}`,
    },
    openGraph: {
      title: seo.softwareDev.mvpDev.openGraph.title,
      description: seo.softwareDev.mvpDev.openGraph.description,
      url: seo.softwareDev.mvpDev.openGraph.url,
      images: seo.softwareDev.mvpDev.openGraph.images,
      type: seo.softwareDev.mvpDev.openGraph.type as "website",
    },
    twitter: {
      title: seo.softwareDev.mvpDev.twitter.title,
      description: seo.softwareDev.mvpDev.twitter.description,
      images: seo.softwareDev.mvpDev.twitter.images,
    },
  };
}

export default function MvpDev() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://softdoes.com/software-development/mvp-development",
    name: "MVP Development Services",
    description:
      "SoftDoes offers end-to-end MVP development services, transforming ideas into market-ready products with a focus on user-centric design, agile development, and rapid iteration.",
    publisher: {
      "@type": "Organization",
      name: "SoftDoes",
      url: "https://softdoes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://softdoes.com/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/company/softdoes",
        "https://twitter.com/softdoes",
      ],
    },
    mainEntityOfPage:
      "https://softdoes.com/software-development/mvp-development",
    image: "https://softdoes.com/images/mvp-development-banner.jpg",
    about: {
      "@type": "Service",
      serviceType: "MVP Development",
      provider: {
        "@type": "Organization",
        name: "SoftDoes",
        url: "https://softdoes.com",
      },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "Startups, Entrepreneurs, Product Managers",
      },
      offers: {
        "@type": "Offer",
        url: "https://softdoes.com/software-development/mvp-development",
        priceCurrency: "USD",
        price: "Contact for pricing",
        eligibleRegion: "Worldwide",
      },
    },
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
          name: "Software Development",
          item: "https://softdoes.com/software-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MVP Development",
          item: "https://softdoes.com/software-development/mvp-development",
        },
      ],
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Alex Johnson",
      },
      datePublished: "2023-10-07",
      reviewBody:
        "SoftDoes transformed our concept into a functional MVP swiftly. Their team's technical expertise and proactive communication were invaluable.",
      name: "Exceptional MVP Development",
    },
    potentialAction: {
      "@type": "Action",
      name: "Request a Quote",
      target: "https://softdoes.com/contact",
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
        heroImg={HeroImage}
        data={{
          title: "MVP Development",
          tagText: "Designs that captivate, experiences that deliver.",
          btnText: "Contact us",
        }}
        backgroundKey="mvpDev"
        isDynamicImage
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
