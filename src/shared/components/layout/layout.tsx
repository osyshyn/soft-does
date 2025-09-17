import type { ReactNode } from "react";

import Header from "@shared/components/header/header";
import dynamic from "next/dynamic";
import clsx from "clsx";
import s from "./layout.module.scss";

const ContactInfo = dynamic(
  () => import("@sections/contact/contact-info/contact-info")
);

const Footer = dynamic(() => import("@shared/components/footer/footer"), {
  ssr: true,
});

const FAQ = dynamic(() => import("@sections/faq/faq"), {});

const TalkToUs = dynamic(() => import("@sections/talk-to-us/talk-to-us"), {});

const ContactWithWidget = dynamic(() => import("@sections/contact/form/form"), {
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

      {talkToUs && (
        <div className="sectionWrapper">
          <TalkToUs />
        </div>
      )}

      {faq && (
        <div className={clsx(s.faq, "sectionWrapper")}>
          <FAQ />
        </div>
      )}
      {contacts && <ContactInfo />}
      <ContactWithWidget title={"TALK TO US"} subtitle={'Ready to launch AI applications that actually work in production? Whether you need AI chatbot development, generative AI software development, or full AI/ML lifecycle support, our team of engineers and data scientists will deliver outcomes that scale with your business.'} />
      <Footer />
    </>
  );
}
