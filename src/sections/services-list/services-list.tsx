import { Arrow } from "@shared/assets/icons/services/arrow";

import clsx from "clsx";
import s from "./services-list.module.scss";
import PreservingLink from "@shared/components/preserving-link/preserving-link";

export const ServicesList = ({ services }: { services: any[] }) => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={"container"}>
        <h2 className={s.title}>Our Services</h2>
        <ul className={s.list}>
          {services.map((item, index) => (
            <li key={index}>
              <PreservingLink className={s.link} href={item.link}>
                <div>
                  <p className={s.softdoes}>SOFT DOES</p>
                  <Arrow className={s.arrow} />
                </div>
                {item.image}
                <h3 className={s.tag}>{item.title}</h3>
                <p className={s.text}>{item.text}</p>
              </PreservingLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
