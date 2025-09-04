import data from "@texts/main/index";
import Image from "next/image";

import certificate from "@shared/assets/images/main/about-us-cerf.png";

import s from "./about-us.module.scss";
import clsx from "clsx";
import { H2, Text } from "@shared/components/typography";

const [firstBlock, secondBlock, thirdBlock] = data.aboutUs.items;

interface AboutUsProps {
  className?: string;
}

export const AboutUs = ({ className }: AboutUsProps) => (
  <section className={clsx(s.root, "wrapper")}>
    <div className={clsx(s.container, "container", className)}>
      <div className={s.head}>
        <div className={s.text}>
          <H2 className={s.text__title}>{data.aboutUs.title}</H2>
          <Text variant="text-lg" className={s.text__description}>
            {data.aboutUs.description}
          </Text>
        </div>

        <ul className={s.list}>
          <li className={s.listItem}>
            <span className={s.listItemNumber}>{firstBlock.title}</span>
            <Text variant="text-lg" className={s.listItemDescription}>
              {firstBlock.description}
            </Text>
          </li>
          <li className={s.listItem}>
            <span className={s.listItemNumber}>{secondBlock.title}</span>
            <Text variant="text-lg" className={s.listItemDescription}>
              {secondBlock.description}
            </Text>
          </li>
          <li className={s.listItem}>
            <span className={s.listItemNumber}>{thirdBlock.title}</span>
            <Text variant="text-lg" className={s.listItemDescription}>
              {thirdBlock.description}
            </Text>
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
