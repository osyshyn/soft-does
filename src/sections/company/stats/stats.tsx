import Image from "next/image";

import { Play } from "@assets/icons/play";

import preview from "@shared/assets/images/company/preview.png";
import spiral from "@shared/assets/images/company/spiral.png";

import s from "./stats.module.scss";
import clsx from "clsx";
import { H3, H4, Text2Xl } from "@shared/components/typography";

const NUMBERS = [
  {
    number: "$2m+",
    text: "In pure profits for our clients",
  },

  {
    number: "100%",
    text: "Data Confidentiality",
  },

  {
    number: "300+",
    text: "Regular Customers",
  },

  {
    number: "25k+",
    text: "Completed Projects",
  },
];

export const Stats = () => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx("container")}>
        <ul className={s.playerContainer}>
          <li>
            <div className={s.leftWrapper}>
              <Image
                aria-hidden
                alt=""
                className={s.previewImg}
                src={preview}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, 800px"
              />
              <Play className={s.play} />
            </div>
          </li>
          <li className={s.right}>
            <div className={s.rightWrapper}>
              <Image
                aria-hidden
                alt=""
                className={s.spiral}
                src={spiral.src}
                width={spiral.width}
                height={spiral.height}
              />
              <H4 className={s.spiralText}>
                <span>&gt;</span> We Transforming Businesses with Cutting-Edge
                Solutions <span>&lt;</span>
              </H4>
            </div>
          </li>
        </ul>

        <ul className={s.stats}>
          {NUMBERS.map((number) => (
            <li key={number.number}>
              <H3 as="p" className={s.number}>
                {number.number}
              </H3>
              <Text2Xl className={s.text}>{number.text}</Text2Xl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
