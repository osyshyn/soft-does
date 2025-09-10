import { Arrow } from "@shared/assets/icons/services/arrow";

import clsx from "clsx";
import s from "./services-list.module.scss";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { H2, H6, TextXl } from "@shared/components/typography";

export const ServicesList = ({ services }: { services: any[] }) => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={"container"}>
        <H2 className={s.title}>Our Services</H2>

        <ul className={clsx(s.list, "gap-md")}>
          {services.map((item, index) => (
            <li className={s.item} key={index}>
              <PreservingLink className={s.card} href={item.link}>
                <div className={s.titleContainer}>
                  <TextXl>SOFT DOES</TextXl>
                  <Arrow className={s.arrow} />
                </div>

                <div className={s.image}>{item.image}</div>

                <div className={s.tagContainer}>
                  <H6 className={s.tag}>{item.title}</H6>
                  <TextXl className={s.text}>{item.text}</TextXl>
                </div>
              </PreservingLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
