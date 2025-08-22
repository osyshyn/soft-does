import Image from "next/image";

import finance from "@assets/images/main/industries-finance.png";
import healtcare from "@assets/images/main/industries-healthcare.png";
import education from "@assets/images/main/industries-education.png";
import construction from "@assets/images/main/industries-construction.png";
import tehnology from "@assets/images/main/industries-technology.png";
import startups from "@assets/images/main/industries-startups.png";
import compliance from "@assets/images/main/industries-compilance.png";
import energy from "@assets/images/main/industries-energy.png";

import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";

import data from "@texts/main/index";
import s from "./industries.module.scss";
import clsx from "clsx";

const INDUSTRIES = {
  finance,
  healtcare,
  education,
  construction,
  tehnology,
  startups,
  compliance,
  energy,
};

type Key = keyof typeof INDUSTRIES;

export const Industries = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx("container")}>
        <h2 className={s.title}>{data.industries.title}</h2>

        <ul className={s.list}>
          {data.industries.list.map((item) => (
            <li
              key={item.id}
              className={s.listItem}
              style={
                {
                  "--current-color-variable":
                    item.color || "rgba(255, 255, 255, 0.2)",
                } as React.CSSProperties
              }
            >
              <Image
                aria-hidden
                alt=""
                src={INDUSTRIES[item.id as Key].src}
                width={INDUSTRIES[item.id as Key].width}
                height={INDUSTRIES[item.id as Key].height}
                className={s.image}
              />

              <div className={s.itemContentWrapper}>
                <p className={s.text}>{item.title}</p>
                <ArrowUpAndRight className={s.arrowUpAndRight} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
