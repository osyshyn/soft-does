import data from "@shared/texts/industries/index.json";

import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>Custom Software Development</h1>
        <p className={s.text}>We create customised software and accompany you every step of the way: from idea identification and software development to post-release support.</p>
        <button className={s.button}>{data.hero.btnText}</button>
      </div>
    </section>
  );
};
