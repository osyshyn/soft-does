"use client";

import data from "@texts/main/index";
import { useRef } from "react";
import { useScroll } from "framer-motion";

import { CaseCards } from "./case-cards/case-cards";

import s from "./case-studies.module.scss";
import clsx from "clsx";
import { H2 } from "@shared/components/typography";

export default function CaseStudies() {
  const items = data.cases.list;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <ul className={s.list} ref={targetRef}>
          <li className={s.list__cardContainer}>
            <div>
              <H2 className={s.list__title}>{data.cases.title}</H2>
            </div>
          </li>

          {items.map((item, index) => {
            const targetScale = 1 - (items.length - index) * 0.2;
            const range = [index * (1 / items.length), 1];

            return (
              <li className={s.list__cardContainer} key={index}>
                <CaseCards
                  item={item}
                  index={index}
                  range={range}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
