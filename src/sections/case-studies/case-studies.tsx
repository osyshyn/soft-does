"use client";

import data from "@texts/main/index";
import { useRef } from "react";
import { useScroll } from "framer-motion";

import { CaseCards } from "./case-cards/case-cards";

import s from "./case-studies.module.scss";
import clsx from "clsx";

export default function CaseStudies() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.contentContainer, "container")}>
        <ul ref={targetRef}>
          <li className={s.cardContainer}>
            <div>
              <h2 className={s.title}>{data.cases.title}</h2>
            </div>
          </li>
          {data.cases.list.map((item, index) => {
            const targetScale = 1 - (data.cases.list.length - index) * 0.05;
            return (
              <CaseCards
                key={index}
                item={item}
                index={index}
                range={[index * 0.2, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
