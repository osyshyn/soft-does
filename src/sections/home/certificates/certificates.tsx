"use client";
import React, { useEffect, useState } from "react";

import artifactDevelopment from "@assets/images/main/artifact-intellagence-certificate.svg?url";
import awsCertificate from "@assets/images/main/aws-certificate.svg?url";
import developerEssentials from "@assets/images/main/developer-essentials.svg?url";
import ibmCoCreation from "@assets/images/main/ibm-co-creation.svg?url";
import pmCertificate from "@assets/images/main/pm-certificate.svg?url";
import webDevelopmentFundamentals from "@assets/images/main/web-development-fundamentals.svg?url";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
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
        // no-op in non-browser environments
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
      <Swiper
        modules={modules}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={80}
        centeredSlides={false}
        speed={1000}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1050: { slidesPerView: 5 },
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
