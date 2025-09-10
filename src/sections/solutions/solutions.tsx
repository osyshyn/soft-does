"use client";

import data from "@shared/texts/expertise";
import ArrowUpAndRightIcon from "@shared/assets/icons/arrow-up-right.svg";

import s from "./solutions.module.scss";
import clsx from "clsx";
import useIsMobile from "@shared/hooks/useIsMobile";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { H2, H6, TextLg, TextXl } from "@shared/components/typography";

export const Solutions = () => {
  const isMobile = useIsMobile(1024);
  const items = isMobile ? data.solutions.categories : data.solutions.list;

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <H2>{data.solutions.title}</H2>

        <div className={s.block}>
          <List items={items} />
        </div>
      </div>
    </section>
  );
};

const List = ({ items }: { items: { title: string; href: string }[] }) => {
  return (
    <ul className={clsx(s.list, "gap-md")}>
      <li className={s.firstCell}>
        <H6 className={s.serviceTitle}>API Integration Services</H6>
        <TextLg className={s.description}>
          Create and enhance your software product with powerful and
          cost-effective technology
        </TextLg>
      </li>

      {items.map((item, index) => (
        <li key={index}>
          <PreservingLink className={s.link} href={item.href}>
            <TextXl>{item.title}</TextXl>
            <ArrowUpAndRightIcon className={s.img} />
          </PreservingLink>
        </li>
      ))}
    </ul>
  );
};
