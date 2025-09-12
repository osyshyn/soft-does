"use client";

const SplineProvider = React.lazy(() => import("@splinetool/react-spline"));

import s from "./hero.module.scss";
import clsx from "clsx";
import { HideContacts } from "@shared/providers/no-contact-provider";
import { Suspense } from "react";
import React from "react";
import { ContactForm } from "@shared/components/contact-form";
import HeroText from "@shared/components/hero-text/hero-text";
import data from "@shared/texts/main";
interface ContactUsHeroProps {
  title: string;
  subtitle: string;
}

export const ContactUsHero = ({ title, subtitle }: ContactUsHeroProps) => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <HideContacts
            fallback={
              <HeroText
                title={data.hero.title}
                buttonText={data.hero.buttonText}
                titleClassName={s.title}
              />
            }
          >
            <ContactForm
              title={title}
              subtitle={subtitle}
              dataLayer={{
                event: "hero_form_submit",
                form_name: "Hero Contact Us",
                form_id: "hero-contact-us-form",
              }}
            />
          </HideContacts>
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
