"use client";

import data from "@shared/texts/expertise";
import ArrowUpAndRightIcon from "@shared/assets/icons/arrow-up-right.svg";

import s from "./solutions.module.scss";
import clsx from "clsx";
import useIsMobile from "@shared/hooks/useIsMobile";
import PreservingLink from "@shared/components/preserving-link/preserving-link";

export const Solutions = () => {
  const isMobile = useIsMobile(1024);
  const items = isMobile ? data.solutions.categories : data.solutions.list;

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

const List = ({ items }: { items: { title: string; href: string }[] }) => {
  return (
    <ul className={s.list}>
      <li className={s.firstCell}>
        <h3 className={s.serviceTitle}>API Integration Services</h3>
        <p className={s.description}>
          Create and enhance your software product with powerful and
          cost-effective technology
        </p>
      </li>

      {items.map((item, index) => (
        <li key={index}>
          <PreservingLink className={s.link} href={item.href}>
            <p>{item.title}</p>
            <ArrowUpAndRightIcon className={s.img} />
          </PreservingLink>
        </li>
      ))}
    </ul>
  );
};
