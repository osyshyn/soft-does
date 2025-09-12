"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import s from "./case-card.module.scss";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import { H4, H5, Text2Xl, TextLg } from "@shared/components/typography";

type CaseItem = {
  id: number;
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
  images: StaticImageData[];
};

type Props = {
  index: number;
  item: CaseItem;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
};

export const CaseCards = ({ item, range, targetScale, progress }: Props) => {
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
      <motion.div
        key={item.id}
        ref={targetRef}
        style={{
          scale: cardScale,
        }}
      >
        <div className={s.card}>
          <Tags
            mainTags={item.mainInfo}
            additionalTags={item.additionalInfo}
            isMobile={isMobile}
          />

          <div className={s.card__content}>
            <H4 as="p" className={s.card__title}>
              {item.title}
            </H4>

            <ul className={s.card__photos}>
              {isMobile ? (
                <li
                  className={s.card__photo}
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.images[0].src})`,
                    minWidth: "200px",
                    height: "180px",
                  }}
                />
              ) : (
                <>
                  {item.images.map((item, index) => (
                    <motion.div
                      key={index}
                      style={{ opacity: scrollYProgress }}
                      className={s.card__photoContainer}
                    >
                      <li
                        className={s.card__photo}
                        style={{
                          backgroundImage: `url(${item.src})`,
                        }}
                      />
                    </motion.div>
                  ))}
                </>
              )}
            </ul>
          </div>

          <ul className={s.bottom}>
            <BottomCard item={item.before} />

            <BottomCard isYellow item={item.after} />
          </ul>
        </div>
      </motion.div>
    </>
  );
};

const Tags = ({
  mainTags,
  additionalTags,
  isMobile,
}: {
  mainTags: string[];
  additionalTags: string[];
  isMobile: boolean;
}) => {
  return (
    <div className={s.tags}>
      {isMobile ? (
        <Swiper
          direction={"horizontal"}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={8}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {[...mainTags, ...additionalTags].map((i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <TextLg className={s.tags__tag}>{i}</TextLg>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <ul className={s.tags__section}>
            {mainTags.map((i) => (
              <li key={i}>
                <TextLg className={s.tags__tag}>{i}</TextLg>
              </li>
            ))}
          </ul>

          <ul className={s.tags__section}>
            {additionalTags.map((i) => (
              <li key={i}>
                <TextLg className={s.tags__tag}>{i}</TextLg>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const BottomCard = ({
  item,
  isYellow,
}: {
  item: {
    tag: string;
    number: string;
    title: string;
    text: string;
  };
  isYellow?: boolean;
}) => {
  return (
    <li className={clsx(s.bottomCard, isYellow && s.bottomCard_yellow)}>
      <TextLg
        className={clsx(
          s.bottomCard__tag,
          isYellow && s.bottomCard__tag_yellow
        )}
      >
        {item.tag}
      </TextLg>

      <Text2Xl
        className={clsx(
          s.bottomCard__title,
          isYellow && s.bottomCard__title_yellow
        )}
      >
        <H5 as="p">{item.number}</H5>
        {item.title}
      </Text2Xl>

      <TextLg>{item.text}</TextLg>
    </li>
  );
};
