import data from "@shared/texts/contact/index.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import Layout from "@shared/components/layout/layout";

import { Hero } from "@sections/hero/hero";
import { Contacts } from "@sections/contactPage/contacts";

import HeroImg from "@assets/images/contact/hero.png";

export default function ContactPage() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.contact} />
      <Layout talkToUs={false} faq={false} contacts={false}>
        <Hero data={data.hero} heroImg={HeroImg} backgroundKey="blue" />
        <Contacts data={data.contacts} />
      </Layout>
    </>
  );
}
