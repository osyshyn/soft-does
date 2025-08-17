import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@shared/ui/spline"), {
  ssr: false,
});

import s from "./hero.module.scss";
import { HeroContactForm } from "@sections/hero-contacts-form/hero-contact-form";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { useNoContacts } from "providers/NoContactProvider";

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
          <Spline scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};
