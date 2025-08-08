"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";

import { Django } from "@shared/assets/icons/main/django";
import { Node } from "@shared/assets/icons/main/node";
import { CPlus } from "@shared/assets/icons/main/c-plus";
import { Python } from "@shared/assets/icons/main/python";
import { Html } from "@shared/assets/icons/main/html";
import s from "./service-swiper.module.scss";

const TECHNOLOGIES = [Django, Node, CPlus, Python, Html];

export const ServiceSwiper = () => {
  const [SwiperCmp, setSwiperCmp] = useState<React.ComponentType<any> | null>(
    null
  );
  const [SwiperSlideCmp, setSwiperSlideCmp] =
    useState<React.ComponentType<any> | null>(null);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const react = await import("swiper/react");
        const mods = await import("swiper/modules");
        if (!mounted) return;
        setSwiperCmp(() => react.Swiper);
        setSwiperSlideCmp(() => react.SwiperSlide);
        setModules([mods.Autoplay]);
      } catch {
        // ignore if Swiper can't load
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!SwiperCmp || !SwiperSlideCmp) return null;
  const Swiper = SwiperCmp as any;
  const SwiperSlide = SwiperSlideCmp as any;

  return (
    <div>
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
          modules={modules}
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
