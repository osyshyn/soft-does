"use client";

import { Autoplay } from "swiper/modules";

import { Django } from "@shared/assets/icons/main/django";
import { Node } from "@shared/assets/icons/main/node";
import { CPlus } from "@shared/assets/icons/main/c-plus";
import { Python } from "@shared/assets/icons/main/python";
import { Html } from "@shared/assets/icons/main/html";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import s from "./service-swiper.module.scss";

const TECHNOLOGIES = [Django, Node, CPlus, Python, Html];

export const ServiceSwiper = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className={s.sliderWrapper}>
        <Swiper
          spaceBetween={16}
          slidesPerView={3.4}
          centeredSlides={false}
          loop={true}
          speed={2000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          modules={[Autoplay]}
        >
          {TECHNOLOGIES.map((Item, idx) => (
            <SwiperSlide key={idx} className={s.slide}>
              <Item className={s.technologiesIcon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
