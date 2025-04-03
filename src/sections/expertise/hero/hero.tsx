import data from "@shared/texts/expertise/index.json";
import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/expertise/hero.png";
import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>{data.hero.title}</h1>
        <p className={s.text}>{data.hero.tagText}</p>
        <button className={s.button}>{data.hero.btnText}</button>
      </div>
      <Image aria-hidden alt="" className={s.heroImage} src={hero.src} width={hero.width} height={hero.height} />
    </section>
  );
};
