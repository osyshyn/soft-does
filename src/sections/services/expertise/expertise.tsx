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

export const Expertise = () => {
  const swiperRef = useRef<SwiperCore>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [allStep, setAllStep] = useState(0);

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.expContainer}>
          <h2 className={s.title}>Expertise</h2>
          <div className={s.progressContainer}>
            <p>
              {String(currentStep).padStart(2, "0")} /{" "}
              {String(allStep).padStart(2, "0")}
            </p>
            <ProgressArrow className={s.progressArrow} />
          </div>

          <div className={s.btnContainer}>
            {currentStep > 1 && (
              <button
                className={s.backBtn}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={currentStep === 1}
              >
                ← Back
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
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
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
  <a href={href} className={s.card}>
    <div className={s.card__titleContainer}>
      <p className={s.card__liTitle}>Soft does</p>
      <Arrow className={s.card__arrow} />
    </div>
    <p className={s.card__info}>{label}</p>
  </a>
);
