import data from "@texts/main/index.json";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Upwork from "@shared/assets/images/industries/upwork.png";
import Avatar from "@shared/assets/images/industries/upwork.svg";
import { Tip } from "@shared/assets/icons/tip";

import s from "./testimonials.module.scss";

export const Testimonials = () => (
  <section className={s.root}>
    <h2 className={s.title}>{data.testimonials.title}</h2>

    <Swiper
      spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			breakpoints={{
				 0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    500: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1050: {
      slidesPerView: 4,
      centeredSlides: true,
    },
			}}
			loop={true}
			speed={1500}
			freeMode={true}
			modules={[Autoplay]}
			className={s.swiper}
			a11y={{ enabled: true }}
    >
      {data.testimonials.list.map((item, index) => (
        <SwiperSlide key={index} className={s.slide}>
          <div className={s.topContentWrapper}>
            <div className={s.upwork}>
              <Image aria-hidden alt="" src={Upwork.src} width={Upwork.width} height={Upwork.height} />
            </div>
            <p className={s.reviewText}>{item.review}</p>
            <Tip className={s.arrowDown} />
          </div>

          <div className={s.bottomContentWrapper}>
            <Image aria-hidden alt="" src={Avatar.src} width={70} height={70} className={s.avatar} />
            <div className={s.bottomContentTitleAndDateWrapper}>
              <h3 className={s.reviewTitle}>{item.name}</h3>
              <span className={s.date}>{item.date}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
