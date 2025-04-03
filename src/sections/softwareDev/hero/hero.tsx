import data from "@shared/texts/softwareDev/index.json";
import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import heroObject from "@assets/images/softwareDev/heroObject.png";
import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>Software Development</h1>
        <div className={s.text}>
          <p>{data.hero.tagText1}</p>
          <p>{data.hero.tagText2}</p>
          <p>{data.hero.tagText3}</p>
          <p>----</p>
        </div>
        <button className={s.button}>{data.hero.btnText}</button>
      </div>
      <Image aria-hidden alt="" className={s.heroImage} src={heroObject.src} width={heroObject.width} height={heroObject.height} />
    </section>
  );
};
