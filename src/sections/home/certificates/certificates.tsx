"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Co1x from "@assets/icons/certificates/co-creator@1x.png";
import Co2x from "@assets/icons/certificates/co-creator@2x.png";
import Co3x from "@assets/icons/certificates/co-creator@3x.png";

import Web1x from "@assets/icons/certificates/web-development@1x.png";
import Web2x from "@assets/icons/certificates/web-development@2x.png";
import Web3x from "@assets/icons/certificates/web-development@3x.png";

import PM1x from "@assets/icons/certificates/project-management@1x.png";
import PM2x from "@assets/icons/certificates/project-management@2x.png";
import PM3x from "@assets/icons/certificates/project-management@3x.png";

import Py1x from "@assets/icons/certificates/web-development-with-python@1x.png";
import Py2x from "@assets/icons/certificates/web-development-with-python@2x.png";
import Py3x from "@assets/icons/certificates/web-development-with-python@3x.png";

import Ai1x from "@assets/icons/certificates/ai-fundamentals@1x.png";
import Ai2x from "@assets/icons/certificates/ai-fundamentals@2x.png";
import Ai3x from "@assets/icons/certificates/ai-fundamentals@3x.png";

import Dev1x from "@assets/icons/certificates/dev-essentials@1x.png";
import Dev2x from "@assets/icons/certificates/dev-essentials@2x.png";
import Dev3x from "@assets/icons/certificates/dev-essentials@3x.png";

import Aws1x from "@assets/icons/certificates/aws-cloud@1x.png";
import Aws2x from "@assets/icons/certificates/aws-cloud@2x.png";
import Aws3x from "@assets/icons/certificates/aws-cloud@3x.png";

import s from "./certificates.module.scss";

type Triple = { name: string; x1: string; x2: string; x3: string };

const CERTS: Triple[] = [
  { name: "co-creator", x1: Co1x.src, x2: Co2x.src, x3: Co3x.src },
  { name: "web-development", x1: Web1x.src, x2: Web2x.src, x3: Web3x.src },
  { name: "project-management", x1: PM1x.src, x2: PM2x.src, x3: PM3x.src },
  {
    name: "web-development-with-python",
    x1: Py1x.src,
    x2: Py2x.src,
    x3: Py3x.src,
  },
  { name: "ai-fundamentals", x1: Ai1x.src, x2: Ai2x.src, x3: Ai3x.src },
  { name: "dev-essentials", x1: Dev1x.src, x2: Dev2x.src, x3: Dev3x.src },
  { name: "aws-cloud", x1: Aws1x.src, x2: Aws2x.src, x3: Aws3x.src },
];

const SIZE = 111;

export default function Certificates() {
  return (
    <section className={s.root}>
      <Swiper
        loop
        speed={1000}
        spaceBetween={80}
        roundLengths
        centeredSlides={false}
        freeMode={false}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1050: { slidesPerView: 5 },
        }}
      >
        {CERTS.map(({ name, x1, x2, x3 }) => (
          <SwiperSlide key={name}>
            <div className={s.slide}>
              {/* We use img because 111px is not enough for NextJs Image to
              provide a correct and high-quality srcSet. Due to an unsuitable
              srcSet, the quality is significantly degraded due to upscale and
              downscale. */}
              <img
                alt={`${name} certificate`}
                width={SIZE}
                height={SIZE}
                sizes={`${SIZE}px`}
                src={x1}
                srcSet={`${x1} 1x, ${x2} 2x, ${x3} 3x`}
                loading="lazy"
                decoding="async"
                className={s.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
