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
  return (
    <Layout>
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
