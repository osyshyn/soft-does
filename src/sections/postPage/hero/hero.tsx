import Link from "next/link";
import Image from "next/image";
import s from "./hero.module.scss";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselItem {
  image?: { url?: string; title?: string };
  title?: string;
  url?: string;
  [key: string]: any;
}

interface HeroProps {
  title: string;
  desc: string;
  button1?: { url?: string; title?: string };
  button2?: { url?: string; title?: string };
  carousel?: CarouselItem[];
}

export const Hero = ({
  title,
  desc,
  button1,
  button2,
  carousel = [],
}: HeroProps) => {
  const validCarousel = Array.isArray(carousel)
    ? carousel.filter((item) => item?.image?.url)
    : [];

  return (
    <section className={s.root}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div>
        {button1 && button1.url && (
          <Link href={button1.url}>
            <button className={s.buttonGreen}>{button1.title}</button>
          </Link>
        )}
        {button2 && button2.url && (
          <Link href={button2.url}>
            <button className={s.buttonWhite}>{button2.title}</button>
          </Link>
        )}
      </div>
      <div className={s.carouselImages}>
        {validCarousel.length > 0 ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Autoplay]}
            className={s.swiper}
          >
            {validCarousel.map((item, idx) => {
              const imageUrl = item?.image?.url?.startsWith("//")
                ? `https:${item.image.url}`
                : item?.image?.url;
              const safeImageUrl = imageUrl || "/images/heroBg_aiDev.png";
              return (
                <SwiperSlide key={idx} className={s.slide}>
                  <Link href={item?.url || "#"} className={s.carousellingLink}>
                    <Image
                      aria-hidden
                      alt={item.image?.title || item.title || "hero image"}
                      src={safeImageUrl}
                      width={1200}
                      height={600}
                      className={s.carouselImage}
                      placeholder="blur"
                      blurDataURL="/images/heroBg_aiDev.png"
                      style={{ transition: "opacity 0.5s", opacity: 1 }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
