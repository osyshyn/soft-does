import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import Consulting1 from "@assets/images/expertise/consulting1.png";
import Consulting2 from "@assets/images/expertise/consulting2.png";

import s from "./consulting.module.scss";

interface CardProps {
  img: StaticImageData;
  title: string;
  text: string;
  imagePosition?: "left" | "right";
}

const Card = ({ img, title, text, imagePosition = "right" }: CardProps) => (
  <div className={clsx(s.block, { [s.reverse]: imagePosition === "left" })}>
    <div className={s.block__content}>
      <h3 className={s.block__title}>{title}</h3>
      <p className={s.block__text}>{text}</p>
    </div>
    <div className={s.block__image}>
      <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
    </div>
  </div>
);

export const Consulting = () => (
  <section className={clsx(s.root, "wrapper")}>
    <div className={clsx(s.container, "container")}>
      <Card
        img={Consulting1}
        title="IT consulting and digital advisory"
        text="“Yalantis has been a great fit for us because of their experience […] perform as expected.”"
        imagePosition="right"
      />

      <Card
        img={Consulting2}
        title="Another consulting block"
        text="“Here’s another testimonial or description, styled identically, with a dynamic image.”"
        imagePosition="left"
      />
    </div>
  </section>
);

export default Consulting;
