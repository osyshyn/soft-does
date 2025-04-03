import Spline from "@splinetool/react-spline";

import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Kansas />
        <h1 className={s.title}>Cloud Services</h1>
        <p className={s.tagText}>
          We create customised software and accompany you every step of the way: from idea identification and software development to post-release support.
        </p>
        <button className={s.button}>Contact us</button>
      </div>
      <Spline scene="https://prod.spline.design/pS-CwW5tkPfZHSKA/scene.splinecode" className={s.scene} />
    </section>
  );
};
