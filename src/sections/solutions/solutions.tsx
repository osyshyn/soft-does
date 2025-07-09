import data from "@shared/texts/expertise/index.json";

// import { ArrowUpAndRight } from "@shared/assets/icons/services/arrow-up-and-right";
import ArrowUpAndRightIcon from "@shared/assets/icons/arrow-up-right.svg";

import s from "./solutions.module.scss";
import clsx from "clsx";

export const Solutions = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <h2>{data.solutions.title}</h2>
        <div className={s.block}>
          <ul className={s.list}>
            <li className={s.firstCell}>
              <h3 className={s.serviceTitle}>API Integration Services</h3>
              <p className={s.description}>
                Create and enhance your software product with powerful and
                cost-effective technology
              </p>
            </li>
            {data.solutions.list.map((title, index) => (
              <li key={index} className={s.link}>
                <p>{title}</p>
                <ArrowUpAndRightIcon className={s.img} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
