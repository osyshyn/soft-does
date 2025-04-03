// import { useState } from "react";

import { ProgressArrow } from "@shared/assets/icons/services/progress-arrow";
import { Arrow } from "@shared/assets/icons/services/arrow";

import s from "./expertise.module.scss";

export const Expertise = () => {
  // const [selected, setSelected] = useState<string | null>(null);

  const expertiseList = [
    { id: "software-dev", title: "Software Development" },
    { id: "ai-ml", title: "AI & Machine Learning" },
    { id: "cloud-services", title: "Cloud Services" },
    { id: "data-engineering", title: "Data Science & Engineering" },
    { id: "architecture", title: "Architecture & Consulting Services" },
    { id: "ui-ux", title: "UI/UX Design" },
  ];

  // const services = {
  //   "software-dev": ["Custom Software Development", "Mobile App Development", "Web Application Development", "MVP Development", "Product Development", "API Integration Services"],
  // };

  return (
    <section className={s.root}>
      <div className={s.expContainer}>
        <h2 className={s.title}>Expertise</h2>
        <div className={s.progressContainer}>
          <p>01/02</p>
          <ProgressArrow className={s.progressArrow} />
        </div>
      </div>
      <div>
        <ul className={s.list}>
          {expertiseList.map((item) => (
            <li key={item.id}>
              <div className={s.titleContainer}>
                <p className={s.liTitle}>Soft does</p>
                <Arrow className={s.arrow} />
              </div>
              <p className={s.info}>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
