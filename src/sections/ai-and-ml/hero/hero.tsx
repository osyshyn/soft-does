import Image from "next/image";

import { Kansas } from "@shared/components/kansas/kansas";

import hero from "@assets/images/aiml/hero-x2.png";
import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>AI & Machine Learning</h1>
        <p className={s.tagText}>
          We create customised software and accompany you every step of the way: from idea identification and software development to post-release support.
        </p>
        <button className={s.button}>Contact us</button>
      </div>
      <Image aria-hidden alt="" src={hero.src} className={s.heroImage} width={hero.width} height={hero.height} />
    </section>
  );
};
