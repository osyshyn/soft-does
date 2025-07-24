import data from "@texts/main/index.json";
import Image from "next/image";

import certificate from "@shared/assets/images/main/about-us-cerf.png";

import s from "./about-us.module.scss";
import clsx from "clsx";

const [firstBlock, secondBlock, thirdBlock] = data.aboutUs.items;

export const AboutUs = () => (
  <section className={clsx(s.root, "wrapper")}>
    <div className={clsx(s.container, "container")}>
      <div className={s.head}>
        <div className={s.text}>
          <h2 className={s.text__title}>{data.aboutUs.title}</h2>
          <p className={s.text__description}>{data.aboutUs.description}</p>
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
      </div>

      <Image
        className={s.certificate}
        src={certificate.src}
        width={200}
        height={200}
        aria-hidden
        alt=""
      />
    </div>
  </section>
);
