import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./hero.module.scss";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { H1 } from "@shared/components/typography";

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
      <H1>{title}</H1>
      <p>{desc}</p>
      <div>
        {button1 && button1.url && (
          <PreservingLink href={button1.url}>
            <button className={s.buttonGreen}>{button1.title}</button>
          </PreservingLink>
        )}
        {button2 && button2.url && (
          <PreservingLink href={button2.url}>
            <button className={s.buttonWhite}>{button2.title}</button>
          </PreservingLink>
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
                  <PreservingLink
                    href={item?.url || "#"}
                    className={s.carousellingLink}
                  >
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
                  </PreservingLink>
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
