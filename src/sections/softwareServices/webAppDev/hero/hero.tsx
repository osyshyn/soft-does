import data from "@shared/texts/industries/index.json";

import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>Web Application Development</h1>
        <p className={s.text}>Designs that captivate, experiences that deliver.</p>
        <button className={s.button}>{data.hero.btnText}</button>
      </div>
    </section>
  );
};
