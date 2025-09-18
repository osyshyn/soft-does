"use client";

import { useState } from "react";

import s from "./grid-porfolio.module.scss";
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

export const GridPorfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All project");

  const filteredProjects =
    activeCategory === "All project"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <H2 className={s.title}>Works for our customers</H2>
        <div className={s.nav}>
          <ListFilter
            value={activeCategory}
            onChange={setActiveCategory}
            categories={CATEGORIES}
          />
        </div>

        <ul className={s.projectsContainer}>
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <PortfolioCard
                img={project.img}
                title={project.title}
                description={project.description}
                slug={project.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
