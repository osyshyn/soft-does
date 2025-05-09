"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import artifactDevelopment from "@assets/images/main/artifact-intellagence-certificate.svg";
import awsCertificate from "@assets/images/main/aws-certificate.svg";
import developerEssentials from "@assets/images/main/developer-essentials.svg";
import ibmCoCreation from "@assets/images/main/ibm-co-creation.svg";
import pmCertificate from "@assets/images/main/pm-certificate.svg";
import webDevelopmentFundamentals from "@assets/images/main/web-development-fundamentals.svg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import s from "./certificates.module.scss";

const CERTIFICATES = [artifactDevelopment, awsCertificate, developerEssentials, ibmCoCreation, pmCertificate, webDevelopmentFundamentals];

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
        {CERTIFICATES.map((item) => (
          <SwiperSlide key={item.src} className={s.slide}>
            <Image alt="" aria-hidden src={item.src} width={item.width} height={item.height} className={s.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
