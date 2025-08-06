import type { ReactNode } from "react";

import { TalkToUs } from "@sections/talk-to-us/talk-to-us";
import { FAQ } from "@sections/faq/faq";
import { Contacts } from "@sections/contacts/contacts";
// import { ContactsForm } from "@sections/contacts-form/contacts-form";

import Header from "@sections/header/header";
import Footer from "@sections/footer/footer";
import dynamic from "next/dynamic";
import HeaderSSG from "@sections/header-ssg/header";

const ContactsForm = dynamic(
  () => import("@sections/contacts-form/contacts-form"),
  { ssr: false }
);

interface LayoutProps {
  children: ReactNode;
  talkToUs?: boolean;
  faq?: boolean;
  contacts?: boolean;
  posts?: boolean;
  isLanding?: boolean;
}

export default function Layout({
  children,
  talkToUs = true,
  faq = true,
  contacts = true,
  posts = false,
  isLanding = false,
}: LayoutProps) {
  return (
    <>
      <Header posts={posts} isLanding={isLanding} />
      <HeaderSSG />
      <main>{children}</main>
      {talkToUs && <TalkToUs />}
      {faq && <FAQ />}
      {contacts && <Contacts />}
      <ContactsForm />
      <Footer />
    </>
  );
}
