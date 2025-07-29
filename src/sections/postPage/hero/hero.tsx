import Image from "next/image";

import img from "@assets/images/blog/postHero.png";
import s from "./hero.module.scss";

// TODO: add swiper with images & buttons texts
export const Hero = ({title, desc}) => {
  return (
    <section className={s.root}>
      <h1>{title}</h1>
      <p>
          {desc}
      </p>
      <div>
        <button className={s.buttonGreen}>Let’s discuss</button>
        <button className={s.buttonWhite}>Get a Qoute</button>
      </div>
      <Image aria-hidden alt="" src={img.src} width={img.width} height={img.height} />
    </section>
  );
};
