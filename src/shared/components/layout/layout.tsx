import type { ReactNode } from "react";

import Header from "@sections/header/header";
import dynamic from "next/dynamic";

const ContactsForm = dynamic(
  () => import("@sections/contacts-form/contacts-form"),
  { ssr: false }
);

const Footer = dynamic(() => import("@sections/footer/footer"), {
  ssr: true,
});

const FAQ = dynamic(() => import("@sections/faq/faq"), {
  ssr: false,
});

const TalkToUs = dynamic(() => import("@sections/talk-to-us/talk-to-us"), {
  ssr: false,
});

const Contacts = dynamic(() => import("@sections/contacts/contacts"), {
  ssr: true,
});

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
      <main>{children}</main>
      {talkToUs && <TalkToUs />}
      {faq && <FAQ />}
      {contacts && <Contacts />}
      <ContactsForm />
      <Footer />
    </>
  );
}
