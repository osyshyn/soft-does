import data from "@texts/main/index";

import s from "./hero.module.scss";
import clsx from "clsx";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@shared/components/hero-text/hero-text";

const SplineComponent = dynamic(() => import("@shared/ui/spline"), {
  ssr: true,
});

export const Hero = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <HeroText
          title={data.hero.title}
          // text={data.hero.tagText}
          buttonText={data.hero.buttonText}
          titleClassName={s.title}
        />

        <div className={s.main_image}>
          <SplineComponent scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};
