"use client";

const SplineProvider = React.lazy(() => import("@splinetool/react-spline"));

import s from "./hero.module.scss";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { useNoContacts } from "@shared/providers/no-contact-provider";
import { Suspense } from "react";
import React from "react";
import { ContactForm } from "@shared/components/contact-form";

interface ContactUsHeroProps {
  title: string;
  subtitle: string;
}

export const ContactUsHero = ({ title, subtitle }: ContactUsHeroProps) => {
  const { noContacts } = useNoContacts();
  if (noContacts) return null;

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />

          <ContactForm
            title={title}
            subtitle={subtitle}
            dataLayer={{
              event: "hero_form_submit",
              form_name: "Hero Contact Us",
              form_id: "hero-contact-us-form",
            }}
          />
        </div>

        <div className={s.main_image}>
          <Suspense fallback={null}>
            <SplineProvider scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
