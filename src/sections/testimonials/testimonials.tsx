"use client";

import data from "@texts/main/index.json";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "swiper/css";

import Upwork from "@shared/assets/images/industries/upwork.png";
import Avatar from "@shared/assets/images/industries/reviews.png";
import { Tip } from "@shared/assets/icons/tip";

import s from "./testimonials.module.scss";

export const Testimonials = () => {
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
        // ignore in crawler environments
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
    <section className={s.root}>
      <h2 className={s.title}>{data.testimonials.title}</h2>
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={1500}
          freeMode={true}
          modules={modules}
          className={s.swiper}
          a11y={{ enabled: true }}
        >
          {data.testimonials.list.map((item, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <div className={s.topContentWrapper}>
                <div className={s.upwork}>
                  <Image
                    aria-hidden
                    alt=""
                    src={Upwork.src}
                    width={Upwork.width}
                    height={Upwork.height}
                  />
                </div>
                <p className={s.reviewText}>{item.review}</p>
                <Tip className={s.arrowDown} />
              </div>
              <div className={s.bottomContentWrapper}>
                <Image
                  aria-hidden
                  alt=""
                  src={Avatar.src}
                  width={Avatar.width}
                  height={Avatar.height}
                  className={s.avatar}
                />
                <div className={s.bottomContentTitleAndDateWrapper}>
                  <h3 className={s.reviewTitle}>{item.name}</h3>
                  <span className={s.date}>{item.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
