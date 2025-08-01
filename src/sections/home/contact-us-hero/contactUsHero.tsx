import Spline from "@splinetool/react-spline";

import s from "./hero.module.scss";
import { HeroContactForm } from "@sections/hero-contacts-form/hero-contact-form";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";

export const ContactUsHero = () => {
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
