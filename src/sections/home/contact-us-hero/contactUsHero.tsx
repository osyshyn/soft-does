// import dynamic from "next/dynamic";

// const Spline = dynamic(() => import("@shared/ui/spline"), {
//   ssr: false,
// });

const SplineProvider = React.lazy(() => import("@splinetool/react-spline"));

import s from "./hero.module.scss";
import { HeroContactForm } from "@sections/hero-contacts-form/hero-contact-form";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { useNoContacts } from "providers/NoContactProvider";
import { Suspense } from "react";
// import { SplineProvider } from "@shared/ui/spline";
import React from "react";

export const ContactUsHero = () => {
  const { noContacts } = useNoContacts();
  if (noContacts) return null;

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />

          <HeroContactForm />
        </div>

        <div className={s.main_image}>
          <Suspense fallback={null}>
            <SplineProvider scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
          </Suspense>
          {/* <Spline scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" /> */}
        </div>
      </div>
    </section>
  );
};
