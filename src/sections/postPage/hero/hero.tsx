import Image from "next/image";

import img from "@assets/images/blog/postHero.png";
import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.root}>
      <h1>ai technology innovation</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cum parturient ipsum tellus massa tincidunt consequat mattis cursus semper. Nisi amet imperdiet elementum pellentesque est. Ut
        feugiat lobortis mollis elementum lorem.
      </p>
      <div>
        <button className={s.buttonGreen}>Let’s discuss</button>
        <button className={s.buttonWhite}>Get a Qoute</button>
      </div>
      <Image aria-hidden alt="" src={img.src} width={img.width} height={img.height} />
    </section>
  );
};
