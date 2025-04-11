import Image from "next/image";

import { Play } from "@assets/icons/play";

import preview from "@shared/assets/images/company/preview.png";
import spiral from "@shared/assets/images/company/spiral.png";

import s from "./stats.module.scss";

export const Stats = () => {
  return (
    <section className={s.root}>
      <ul className={s.playerContainer}>
        <li>
          <div className={s.leftWrapper}>
            <Image aria-hidden alt="" className={s.previewImg} src={preview.src} width={preview.width} height={preview.height} />
            <Play className={s.play} />
          </div>
        </li>
        <li>
          <div className={s.rightWrapper}>
            <Image aria-hidden alt="" className={s.spiral} src={spiral.src} width={spiral.width} height={spiral.height} />
            <p>We Transforming Businesses with Cutting-Edge Solutions</p>
          </div>
        </li>
      </ul>

      <ul className={s.stats}>
        <li>
          <p className={s.number}>$2m+</p>
          <p className={s.text}>In pure profits for our clients</p>
        </li>
        <li>
          <div className={s.numberDiv}>
            <p className={s.number}>100%</p>
          </div>
          <div className={s.textDiv}>
            <p className={s.text}>Data Confidentiality</p>
          </div>
        </li>
        <li>
          <div className={s.numberDiv}>
            <p className={s.number}>300+</p>
          </div>
          <div className={s.textDiv}>
            <p className={s.text}>Regular Customers</p>
          </div>
        </li>
        <li>
          <div className={s.numberDiv}>
            <p className={s.number}>25k+</p>
          </div>
          <div className={s.textDiv}>
            <p className={s.text}>Completed Projects</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
