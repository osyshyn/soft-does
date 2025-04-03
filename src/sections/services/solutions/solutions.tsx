import { ArrowUpAndRight } from "@shared/assets/icons/services/arrow-up-and-right";

import s from "./solutions.module.scss";

const TITLES = [
  "IoT Services",
  "AI development services",
  "Data science services",
  "Machine learning development",
  "IoT Services",
  "AI development services",
  "Data science services",
  "Machine learning development",
  "IoT Services",
  "AI development services",
  "Data science services",
  "Machine learning development",
  "IoT Services",
  "AI development services",
];

export const Solutions = () => {
  return (
    <section className={s.root}>
      <h2>Solutions</h2>
      <div className={s.block}>
        <div className={s.left}>
          <h3 className={s.title}>Technology excellence</h3>
          <p className={s.subtitle}>Create and enhance your software product with powerful and cost-effective technology</p>
        </div>
        <div className={s.right}>
          <ul className={s.list}>
            {TITLES.map((title, index) => (
              <li key={index} className={s.link}>
                <p>{title}</p>
                <ArrowUpAndRight className={s.img} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
