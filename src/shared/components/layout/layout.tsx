import type { ReactNode } from "react";

import { TalkToUs } from "@sections/talk-to-us/talk-to-us";
import { FAQ } from "@sections/faq/faq";
import { Contacts } from "@sections/contacts/contacts";
import { ContactsForm } from "@sections/contacts-form/contacts-form";

import Header from "@sections/header/header";
import Footer from "@sections/footer/footer";

interface LayoutProps {
  children: ReactNode;
  talkToUs?: boolean;
  faq?: boolean;
}

export default function Layout({ children, talkToUs = true, faq = true }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {talkToUs && <TalkToUs />}
      {faq && <FAQ />}
      <Contacts />
      <ContactsForm />
      <Footer />
    </>
  );
}
