"use client";

import data from "@texts/main/index.json";
// import SafeSpline from "@shared/components/safe-spline/safe-spline";

import s from "./hero.module.scss";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";

import dynamic from "next/dynamic";
const SafeSpline = dynamic(
  () => import("@shared/components/safe-spline/safe-spline"),
  {
    ssr: false,
  }
);

export const Hero = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />
          <h1 className={s.title}>{data.hero.title}</h1>

          <div>
            <button className={s.button}>{data.hero.buttonText}</button>
          </div>
        </div>

        <div className={s.main_image}>
          <SafeSpline scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};
