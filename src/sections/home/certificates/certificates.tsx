"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AwsCloud from "@assets/icons/certificates/aws-cloud.png";
import CoCreator from "@assets/icons/certificates/co-creator.png";
import DevEssentials from "@assets/icons/certificates/dev-essentials.png";
import ProjectManagement from "@assets/icons/certificates/project-management.png";
import WebDevelopmentWithPython from "@assets/icons/certificates/web-development-with-python.png";
import WebDevelopment from "@assets/icons/certificates/web-development.png";
import AiFundamentals from "@assets/icons/certificates/ai-fundamentals.png";
import Image from "next/image";

import s from "./certificates.module.scss";

const CERTIFICATES = [
  CoCreator,
  WebDevelopment,
  ProjectManagement,
  WebDevelopmentWithPython,
  AiFundamentals,
  DevEssentials,
  AwsCloud,
];

export const Certificates = () => {
  return (
    <section className={s.root}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={80}
        centeredSlides={false}
        speed={1000}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1050: {
            slidesPerView: 5,
          },
        }}
      >
        {CERTIFICATES.map((item, index) => (
          <SwiperSlide key={index} className={s.slide}>
            <Image
              alt={`Certificate ${index + 1}`}
              aria-hidden
              priority
              src={item}
              className={s.image}
              quality={100}
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
