import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";

import Iphone from "@shared/assets/images/services/Iphone14Pro.png";
import Notebook from "@shared/assets/images/services/Notebook.png";
import Notebook2 from "@shared/assets/images/services/2notebook.png";

import s from "./portfolio.module.scss";
import clsx from "clsx";

const CATEGORIES = ["All project", "Web app", "Mobile app", "Development", "UX", "UI", "Branding"];

const PROJECTS = [
  {
    id: 1,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Web app",
    img: Iphone,
  },
  {
    id: 2,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Mobile app",
    img: Notebook,
  },
  {
    id: 3,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Development",
    img: Notebook2,
  },
  {
    id: 4,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "UX",
    img: Iphone,
  },
  {
    id: 5,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "UI",
    img: Notebook,
  },
  {
    id: 6,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Branding",
    img: Notebook2,
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All project");
  const [progress, setProgress] = useState<number>(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const filteredProjects = activeCategory === "All project" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

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
    <section className={s.root}>
      <div className={s.container}>
        <h2>Portfolio</h2>
        <div className={s.nav}>
          {CATEGORIES.map((category) => (
            <button key={category} className={clsx(s.filterButton, activeCategory === category && s.active)} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={s.swiperContainer}>
        <div className={s.nextPrev}>
          <button id="prevBtn">{"<"}</button>
          <button id="nextBtn">{">"}</button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
          spaceBetween={30}
          slidesPerView={3.5}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className={s.swiper}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className={s.slide}>
              <Image aria-hidden alt="" src={project.img.src} className={s.image} width={project.img.width} height={project.img.height} />
              <h3 className={s.cardTitle}>{project.title}</h3>
              <p className={s.subtitle}>{project.subtitle}</p>
              <p className={s.description}>
                “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an
                effective development team in no time and perform as expected.”
              </p>
              <button className={s.readMore}>Read more</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.progressBar}>
        <div className={s.progress} style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
};
