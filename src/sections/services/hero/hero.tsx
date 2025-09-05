import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/services/service-hero_shadow.png";

import s from "./hero.module.scss";
import clsx from "clsx";
import { H1 } from "@shared/components/typography";

export const Hero = () => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <Kansas />
        <H1 className={s.title}>
          <span>Soft does</span> services
        </H1>
        <p className={s.tagText}>
          Get software that scales, adapts, and drives results—no fluff, just
          the tools you need to grow.
        </p>
        <button className={s.button}>Contact us</button>

        <Image
          aria-hidden
          alt=""
          src={hero.src}
          className={s.heroImage}
          width={hero.width}
          height={hero.height}
        />
      </div>
    </section>
  );
};
