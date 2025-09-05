"use client";

import data from "@texts/main/index";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Upwork from "@shared/assets/images/industries/upwork.png";
import { Tip } from "@shared/assets/icons/tip";

import s from "./testimonials.module.scss";
import { H2, Text } from "@shared/components/typography";

export const Testimonials = () => (
  <section className={s.root}>
    <H2 className={s.title}>{data.testimonials.title}</H2>

    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        freeMode={true}
        modules={[Autoplay]}
        className={s.swiper}
        a11y={{ enabled: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: true,
          },
          550: {
            slidesPerView: 1.5,
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
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
              <div className={s.reviewText}>
                {item.review.map((review) => (
                  <Text variant="text-lg" key={review}>
                    {review}
                  </Text>
                ))}
              </div>
              <Tip className={s.arrowDown} />
            </div>

            <div className={s.bottomContentWrapper}>
              <div
                className={s.avatar}
                style={{
                  backgroundColor: item.style?.backgroundColor,
                }}
              >
                <Image
                  aria-hidden
                  alt=""
                  src={item.logo ? item.logo : Upwork}
                  style={{
                    width: item.style?.width,
                    height: item.style?.height,
                  }}
                  sizes="70px"
                />
              </div>
              <div className={s.bottomContentTitleAndDateWrapper}>
                <Text variant="text-lg" className={s.reviewTitle}>
                  {item.name}
                </Text>
                <Text className={s.date} variant="text-md">
                  {item.date}
                </Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
