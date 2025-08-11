import s from "./hero.module.scss";
import clsx from "clsx";
import Image from "next/image";
import HeroText from "@shared/components/hero-text/hero-text";
import HeroImage from "@shared/assets/images/dse/services/dsag_wave.png";

export const Hero = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <Image
          priority
          sizes="(max-width: 1024px) 100vw, 1300px"
          className={s.main_image}
          src={HeroImage}
          quality={100}
          alt={"Hero Image"}
        />

        <HeroText
          className={s.content}
          title={"Data Strategy and Governance"}
          text={`Designs that captivate, experiences that deliver.`}
          buttonText={"Contact us"}
        />
      </div>
    </section>
  );
};
