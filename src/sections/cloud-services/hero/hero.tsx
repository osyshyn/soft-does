const SplineProvider = React.lazy(() => import("@splinetool/react-spline"));

import data from "@texts/cloud-services/index.json";
import s from "./hero.module.scss";
import HeroText from "@shared/components/hero-text/hero-text";
import clsx from "clsx";
import { Suspense } from "react";
import React from "react";

export const Hero = () => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <HeroText
            title={data.hero.title}
            text={data.hero.tagText}
            buttonText={data.hero.btnText}
            className={s.heroText}
          />
        </div>

        <div className={s.main_image}>
          <Suspense fallback={null}>
            <SplineProvider
              scene="https://prod.spline.design/pS-CwW5tkPfZHSKA/scene.splinecode"
              className={s.scene}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
