import data from "@texts/main/index.json";
import Image from "next/image";

import certificate from "@shared/assets/images/main/about-us-cerf.png";

import s from "./about-us.module.scss";

const [firstBlock, secondBlock, thirdBlock] = data.aboutUs.items;

export const AboutUs = () => (
  <section className={s.root}>
    <div className={s.leftContentWrapper}>
      <h2 className={s.title}>{data.aboutUs.title}</h2>
      <p className={s.description}>{data.aboutUs.description}</p>
    </div>

    <ul className={s.list}>
      <li className={s.listItem}>
        <span className={s.listItemNumber}>{firstBlock.title}</span>
        <p className={s.listItemDescription}>{firstBlock.description}</p>
      </li>
      <li className={s.listItem}>
        <span className={s.listItemNumber}>{secondBlock.title}</span>
        <p className={s.listItemDescription}>{secondBlock.description}</p>
      </li>
      <li className={s.listItem}>
        <span className={s.listItemNumber}>{thirdBlock.title}</span>
        <p className={s.listItemDescription}>{thirdBlock.description}</p>
      </li>
    </ul>

    <Image className={s.certificate} src={certificate.src} width={certificate.width} height={certificate.height} aria-hidden alt="" />
  </section>
);
