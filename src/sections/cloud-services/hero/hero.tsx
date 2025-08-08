import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@shared/ui/spline"), {
  ssr: false,
});

import data from "@texts/cloud-services/index.json";
import s from "./hero.module.scss";
import HeroText from "@shared/components/hero-text/hero-text";
import clsx from "clsx";

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
          <Spline
            scene="https://prod.spline.design/pS-CwW5tkPfZHSKA/scene.splinecode"
            className={s.scene}
          />
        </div>
      </div>
    </section>
  );
};
