import data from "@texts/main/index.json";

import s from "./hero.module.scss";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { HideContacts } from "providers/NoContactProvider";
import React from "react";
import { ScrollToContact } from "@shared/components/scroll-to-contact";
import SplineComponent from "@shared/ui/spline";

export const Hero = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />
          <h1 className={s.title}>{data.hero.title}</h1>

          <HideContacts>
            <ScrollToContact className={s.button}>
              {data.hero.buttonText}
            </ScrollToContact>
          </HideContacts>
        </div>

        <div className={s.main_image}>
          <SplineComponent scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};
