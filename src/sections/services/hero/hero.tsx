import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/services/service-hero_shadow.png";

import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>
          <span>Soft does</span> services
        </h1>
        <p className={s.tagText}>Get software that scales, adapts, and drives results—no fluff, just the tools you need to grow.</p>
        <button className={s.button}>Contact us</button>
      </div>
      <Image aria-hidden alt="" src={hero.src} className={s.heroImage} width={hero.width} height={hero.height} />
    </section>
  );
};
