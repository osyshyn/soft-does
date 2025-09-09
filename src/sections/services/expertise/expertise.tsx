"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import clsx from "clsx";

import s from "./expertise.module.scss";
import { ProgressArrow } from "@shared/assets/icons/services/progress-arrow";
import { Arrow } from "@shared/assets/icons/services/arrow";
import { SERVICES } from "@shared/constants/services";
import { H2, Text2Xl, TextXl } from "@shared/components/typography";
import Link from "next/link";

export const Expertise = () => {
  const swiperRef = useRef<SwiperCore>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [allStep, setAllStep] = useState(0);

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.expContainer}>
          <H2 className={s.title}>Expertise</H2>
          <div className={s.progressContainer}>
            <p className={s.progressText}>
              <span>{String(currentStep).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(allStep).padStart(2, "0")}</span>

              <span>
                <ProgressArrow className={s.progressArrow} />
              </span>
            </p>
          </div>

          <div className={s.btnContainer}>
            {currentStep > 1 && (
              <button
                className={s.backBtn}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={currentStep === 1}
              >
                <Text2Xl>← Back</Text2Xl>
              </button>
            )}
          </div>
        </div>

        <div className={s.swiperContainer}>
          <Swiper
            modules={[Grid, Pagination]}
            slidesPerView={3}
            slidesPerGroup={3}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={7}
            pagination={{ clickable: false }}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              setAllStep(sw.snapGrid.length);
            }}
            onSlideChange={(sw) => {
              setCurrentStep(sw.snapIndex + 1);
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              400: { slidesPerView: 2, slidesPerGroup: 2 },
              640: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
              1851: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className={s.list}
          >
            {SERVICES.map((service) => (
              <SwiperSlide key={service.label}>
                <Card label={service.label} href={service.href} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const Card = ({ label, href }: { label: string; href: string }) => (
  <Link href={href} className={s.card}>
    <div className={s.card__titleContainer}>
      <TextXl className={s.card__liTitle}>Soft does</TextXl>
      <Arrow className={s.card__arrow} />
    </div>
    <Text2Xl className={s.card__info}>{label}</Text2Xl>
  </Link>
);
