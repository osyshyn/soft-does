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
  };
}

export default function ContactPage() {
  return (
    <HideContacts>
      <Layout talkToUs={false} faq={false} contacts={false}>
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
