"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import artifactDevelopment from "@assets/images/main/artifact-intellagence-certificate.svg?url";
import awsCertificate from "@assets/images/main/aws-certificate.svg?url";
import developerEssentials from "@assets/images/main/developer-essentials.svg?url";
import ibmCoCreation from "@assets/images/main/ibm-co-creation.svg?url";
import pmCertificate from "@assets/images/main/pm-certificate.svg?url";
import webDevelopmentFundamentals from "@assets/images/main/web-development-fundamentals.svg?url";
import Image from "next/image";

import s from "./certificates.module.scss";

const CERTIFICATES = [
  artifactDevelopment,
  awsCertificate,
  developerEssentials,
  ibmCoCreation,
  pmCertificate,
  webDevelopmentFundamentals,
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
              src={item}
              className={s.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
