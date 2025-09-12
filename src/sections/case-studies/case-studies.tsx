"use client";

import data from "@texts/main/index";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

import { CaseCards } from "./case-cards/case-cards";

import s from "./case-studies.module.scss";
import clsx from "clsx";
import { H2 } from "@shared/components/typography";

export default function CaseStudies() {
  const items = data.cases.list;
  const [isMobile, setIsMobile] = useState(false);
  const [isShortScreen, setIsShortScreen] = useState(false);

  const maxWidthMobile = 500;
  const minHeightForComfort = 800; // мінімальна висота для комфортного перегляду

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= maxWidthMobile);

    const checkScreenHeight = () =>
      setIsShortScreen(window.innerHeight < minHeightForComfort);

    checkMobile();
    checkScreenHeight();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", checkScreenHeight);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", checkScreenHeight);
    };
  }, [maxWidthMobile, minHeightForComfort]);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <ul className={s.list} ref={targetRef}>
          <li className={clsx(s.list__cardContainer)}>
            <div>
              <H2 className={s.list__title}>{data.cases.title}</H2>
            </div>
          </li>

          {items.map((item, index) => {
            const scaleValue = isMobile ? 0.12 : 0.2;
            const targetScale = 1 - (items.length - index) * scaleValue;
            const range = [index * (1 / items.length), 1];

            return (
              <li
                className={clsx(
                  s.list__cardContainer,
                  isShortScreen && s.list__cardContainer_shortScreen
                )}
                key={index}
              >
                <CaseCards
                  item={item}
                  index={index}
                  range={range}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                  isShortScreen={isShortScreen}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
