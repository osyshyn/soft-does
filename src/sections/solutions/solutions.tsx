"use client";

import data from "@shared/texts/expertise/index.json";

import ArrowUpAndRightIcon from "@shared/assets/icons/arrow-up-right.svg";

import s from "./solutions.module.scss";
import clsx from "clsx";
import useIsMobile from "@shared/hooks/useIsMobile";

export const Solutions = () => {
  const isMobile = useIsMobile(1024);
  const items = isMobile ? data.solutions.categories : data.solutions.list;

  console.log(isMobile, items);

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <h2>{data.solutions.title}</h2>
        <div className={s.block}>
          <List items={items} />
        </div>
      </div>
    </section>
  );
};

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className={s.list}>
      <li className={s.firstCell}>
        <h3 className={s.serviceTitle}>API Integration Services</h3>
        <p className={s.description}>
          Create and enhance your software product with powerful and
          cost-effective technology
        </p>
      </li>

      {items.map((title, index) => (
        <li key={index} className={s.link}>
          <p>{title}</p>
          <ArrowUpAndRightIcon className={s.img} />
        </li>
      ))}
    </ul>
  );
};
