import data from "@shared/texts/expertise/index.json";

import { ArrowUpAndRight } from "@shared/assets/icons/services/arrow-up-and-right";

import s from "./solutions.module.scss";

export const Solutions = () => {
  return (
    <section className={s.root}>
      <h2>{data.solutions.title}</h2>
      <div className={s.block}>
        <ul className={s.list}>
          <li className={s.firstCell}>
            <h3 className={s.serviceTitle}>API Integration Services</h3>
            <p className={s.description}>Create and enhance your software product with powerful and cost-effective technology</p>
          </li>
          {data.solutions.list.map((title, index) => (
            <li key={index} className={s.link}>
              <p>{title}</p>
              <ArrowUpAndRight className={s.img} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
