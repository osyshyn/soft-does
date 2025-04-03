import { useState } from "react";
import Image from "next/image";

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
  {
    id: 7,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Web app",
    img: Iphone,
  },
  {
    id: 8,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "Mobile app",
    img: Notebook,
  },
  {
    id: 9,
    title: "Simon Jones",
    subtitle: "CIO in Healthcare",
    category: "UX",
    img: Notebook2,
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All project");

  const filteredProjects = activeCategory === "All project" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className={s.root}>
      <div className={s.container}>
        <h2>Works for our customers</h2>
        <div className={s.nav}>
          {CATEGORIES.map((category) => (
            <button key={category} className={clsx(s.filterButton, activeCategory === category && s.active)} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <ul className={s.projectsContainer}>
          {filteredProjects.map((project) => (
            <li className={s.project} key={project.id}>
              <Image className={s.image} src={project.img.src} width={project.img.width} height={project.img.height} aria-hidden alt="" />
              <h3 className={s.cardTitle}>{project.title}</h3>
              <p className={s.subtitle}>{project.subtitle}</p>
              <p className={s.description}>
                “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an
                effective development team in no time and perform as expected.”
              </p>
              <button className={s.readMore}>Read more</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
