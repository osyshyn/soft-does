"use client";

import { useState, useRef, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

import s from "./portfolio.module.scss";
import clsx from "clsx";
import { H2 } from "@shared/components/typography";
import { PortfolioCard } from "@shared/components/cards";
import { PROJECTS } from "@shared/mocks";
import ListFilter from "@shared/components/list-filter/list-filter";

const CATEGORIES = [
  "All project",
  "Web app",
  "Mobile app",
  "Development",
  "UX",
  "UI",
  "Branding",
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All project");
  const [progress, setProgress] = useState<number>(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const filteredProjects =
    activeCategory === "All project"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const totalSlides = swiper.slides.length;
      const visibleSlides = swiper.params.slidesPerView as number;
      const maxScrollableSlides = totalSlides - visibleSlides;
      const currentIndex = swiper.realIndex;

      const newProgress = (currentIndex / maxScrollableSlides) * 100;
      setProgress(Math.min(newProgress, 100));
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className={s.page}>
        <div className={"wrapper"}>
          <div className={clsx(s.container, "container")}>
            <H2 className={s.page__title}>Portfolio</H2>

            <ListFilter
              categories={CATEGORIES}
              value={activeCategory}
              onChange={setActiveCategory}
              queryParam="category"
            />
          </div>
        </div>

        <div className={"wrapper"}>
          <div className={clsx(s.swiperContainer, "container")}>
            <div className={clsx(s.nextPrev, s.nextPrev_desktop)}>
              <button id="prevBtn">{"<"}</button>
              <button id="nextBtn">{">"}</button>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },

                1200: {
                  slidesPerView: 3,
                },

                1440: {
                  slidesPerView: 3.5,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              className={s.swiper}
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <PortfolioCard
                    img={project.img}
                    title={project.title}
                    description={project.description}
                    slug={project.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={"wrapper"}>
          <div className={clsx("container", s.sliderNav)}>
            <div className={clsx(s.progressBar)}>
              <div className={s.progress} style={{ width: `${progress}%` }} />
            </div>

            <div className={clsx(s.nextPrev, s.nextPrev_mobile)}>
              <button id="prevBtn">{"<"}</button>
              <button id="nextBtn">{">"}</button>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};
