"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import aiLaptop from "@assets/images/main/ai-laptop.png";
import aiPhone from "@assets/images/main/ai-phone.png";
import aiWebApp from "@assets/images/main/ai-web-app.png";
import architectureLaptop from "@assets/images/main/architecture-laptop.png";
import architecturePhone from "@assets/images/main/architecture-phone.png";
import architectureTablet from "@assets/images/main/architecture-tablet.png";
import cloudServicesPhone from "@assets/images/main/cloud-services-phone.png";
import cloudServicesLaptop from "@assets/images/main/cloud-services-laptop.png";
import dataScienceGirlWithPhone from "@assets/images/main/data-science-girl-with-phone.png";
import dataScienceLaptop from "@assets/images/main/data-science-laptop.png";
import dataScienceWebApp from "@assets/images/main/data-science-web-app.png";
import designLaptop from "@assets/images/main/design-laptop.png";
import designPhone from "@assets/images/main/design-phone.png";
import designTwoPhones from "@assets/images/main/design-two-phones.png";

import s from "../case-studies.module.scss";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const PHOTOS = {
  ai: [aiPhone, aiWebApp, aiLaptop],
  "cloud-services": [cloudServicesPhone, cloudServicesLaptop, designTwoPhones],
  "data-science-engineering": [
    dataScienceWebApp,
    dataScienceLaptop,
    dataScienceGirlWithPhone,
  ],
  "architecture-consulting-services": [
    architectureLaptop,
    architecturePhone,
    architectureTablet,
  ],
  "ui-ux-design": [designTwoPhones, designLaptop, designPhone],
};

type Key = keyof typeof PHOTOS;

type CaseItem = {
  id: string;
  title: string;
  mainInfo: string[];
  additionalInfo: string[];
  before: {
    tag: string;
    number: string;
    title: string;
    text: string;
  };
  after: {
    tag: string;
    number: string;
    title: string;
    text: string;
  };
};

type Props = {
  index: number;
  item: CaseItem;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
};

export const CaseCards = ({
  item,
  index,
  range,
  targetScale,
  progress,
}: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "start start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  const maxWidth = 768;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= maxWidth);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [maxWidth]);

  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <>
      <motion.li
        ref={targetRef}
        className={s.cardContainer}
        style={{
          top: isMobile ? `` : `calc(0px + 48px * (${index} - 1))`,
          scale: cardScale,
        }}
        key={index}
      >
        <div className={s.caseCardRoot}>
          <div className={s.tagsContainer}>
            {isMobile ? (
              <Swiper
                direction={"horizontal"}
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={8}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className={s.swiperTags}
              >
                {[...item.mainInfo, ...item.additionalInfo].map((i) => (
                  <SwiperSlide key={i} style={{ width: "auto" }}>
                    <li className={s.tagItem}>{i}</li>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <>
                <ul className={s.mainTags}>
                  {item.mainInfo.map((i) => (
                    <li key={i} className={s.tagItem}>
                      {i}
                    </li>
                  ))}
                </ul>

                <ul className={s.additionalTags}>
                  {item.additionalInfo.map((i) => (
                    <li key={i} className={s.tagItem}>
                      {i}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={s.mainContentWrapper}>
            <h3 className={s.cardTitle}>{item.title}</h3>

            <ul className={s.photosWrapper}>
              {isMobile ? (
                <li
                  className={s.photo}
                  key={item.id}
                  style={{
                    backgroundImage: `url(${PHOTOS[item.id as Key][0].src})`,
                    minWidth: "200px",
                    height: "180px",
                  }}
                />
              ) : (
                <>
                  <motion.div
                    style={{ opacity: scrollYProgress }}
                    className={s.inner}
                  >
                    <li
                      className={s.photo}
                      style={{
                        backgroundImage: `url(${
                          PHOTOS[item.id as Key][0].src
                        })`,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{ opacity: scrollYProgress }}
                    className={s.inner}
                  >
                    <li
                      className={s.photo}
                      style={{
                        backgroundImage: `url(${
                          PHOTOS[item.id as Key][1].src
                        })`,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{ opacity: scrollYProgress }}
                    className={s.inner}
                  >
                    <li
                      className={s.photo}
                      style={{
                        backgroundImage: `url(${
                          PHOTOS[item.id as Key][2].src
                        })`,
                      }}
                    />
                  </motion.div>
                </>
              )}
            </ul>
          </div>

          <ul className={s.bottomContentWrapper}>
            <li className={s.bottomCardWrapper}>
              <span className={s.tag}>{item.before.tag}</span>

              <h4 className={s.bottomTitle}>
                <span className={s.titleNumber}>{item.before.number}</span>
                {item.before.title}
              </h4>

              <p className={s.bottomCardText}>{item.before.text}</p>
            </li>

            <li className={clsx(s.bottomCardWrapper, s.after)}>
              <span className={clsx(s.tag, s.after)}>{item.after.tag}</span>

              <h4 className={clsx(s.bottomTitle, s.after)}>
                <span className={clsx(s.titleNumber, s.after)}>
                  {item.after.number}
                </span>
                {item.after.title}
              </h4>

              <p className={s.bottomCardText}>{item.after.text}</p>
            </li>
          </ul>
        </div>
      </motion.li>
    </>
  );
};
