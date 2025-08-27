import type { ReactNode } from "react";

import Header from "@shared/components/header/header";
import dynamic from "next/dynamic";

const ContactInfo = dynamic(
  () => import("@sections/contact/contact-info/contact-info")
);

const Footer = dynamic(() => import("@shared/components/footer/footer"), {
  ssr: true,
});

const FAQ = dynamic(() => import("@sections/faq/faq"), {});

const TalkToUs = dynamic(() => import("@sections/talk-to-us/talk-to-us"), {});

const Contacts = dynamic(() => import("@sections/contact/form/form"), {
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
      {contacts && <ContactInfo />}
      <Contacts />
      <Footer />
    </>
  );
}
