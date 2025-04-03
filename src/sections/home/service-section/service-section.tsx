"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

import { Pin } from "@shared/assets/icons/pin-icon";
import { Django } from "@shared/assets/icons/main/django";
import { Node } from "@shared/assets/icons/main/node";
import { CPlus } from "@shared/assets/icons/main/c-plus";
import { Python } from "@shared/assets/icons/main/python";
import { Html } from "@shared/assets/icons/main/html";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import s from "./service-section.module.scss";
import clsx from "clsx";

interface IProps {
  currentColor?: string;
  img: StaticImageData;
  title: string;
  list: string[];
  buttonText: string;
  isRight?: boolean;
  link: string;
}

const TECHNOLOGIES = [Django, Node, CPlus, Python, Html];

export const ServiceSection = (props: IProps) => {
  return (
    <section
      className={clsx(s.root, props.isRight && s.isRight)}
      style={
        {
          "--current-color-variable": props.currentColor || "white",
        } as React.CSSProperties
      }
    >
      <div className={clsx(s.leftWrapper, props.isRight && s.isRightWrapper)}>
        <h2 className={clsx(s.title, props.isRight && s.isRightTitle)}>{props.title}</h2>

        <ul className={s.pinList}>
          {props.list.map((item) => (
            <li className={s.pinListItem} key={item}>
              <Pin className={s.pinIcon} />
              {item}
            </li>
          ))}
        </ul>

        <div className={s.sliderWrapper}>
          <Swiper
            spaceBetween={16}
            slidesPerView={3.4}
            centeredSlides={false}
            loop={true}
            speed={2000}
            freeMode={true}
            autoplay={{ delay: 0, disableOnInteraction: false, stopOnLastSlide: false }}
            modules={[Autoplay]}
          >
            {TECHNOLOGIES.map((Item, idx) => (
              <SwiperSlide key={idx} className={s.slide}>
                <Item className={s.technologiesIcon} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link href={props.link} className={s.button}>
          {props.buttonText}
        </Link>
      </div>
      <div className={s.rightWrapper}>
        <Image aria-hidden src={props.img.src} className={s.img} alt="" width={props.img.width} height={props.img.height} />
      </div>
    </section>
  );
};
