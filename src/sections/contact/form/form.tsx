"use client";

import s from "./form.module.scss";
import clsx from "clsx";
import { useNoContacts } from "@shared/providers/no-contact-provider";

import { InlineWidget } from "react-calendly";
import { ContactForm } from "@shared/components/contact-form";

interface FormProps {
  title: string;
  subtitle?: string;
}

export const ContactWithWidget = ({ title, subtitle }: FormProps) => {
  const { noContacts } = useNoContacts();

  if (noContacts) return null;

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div id="contacts-form" className={clsx(s.root, "container")}>
        <ContactForm
          title={title}
          subtitle={subtitle}
          dataLayer={{
            event: "footer_form_submit",
            form_name: "Footer Contact Us",
            form_id: "footer-contact-us-form",
          }}
        />

        <div className={s.calendarWrapper}>
          <InlineWidget url="https://calendly.com/softdoes/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff" />
        </div>
      </div>
    </section>
  );
};

export default ContactWithWidget;
