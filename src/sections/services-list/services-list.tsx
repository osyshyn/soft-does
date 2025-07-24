import Link from "next/link";

import { Arrow } from "@shared/assets/icons/services/arrow";

import s from "./services-list.module.scss";
import clsx from "clsx";

export const ServicesList = ({
  services,
  href,
}: {
  services: any[];
  href: string;
}) => {
  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={"container"}>
        <h2 className={s.title}>Our Services</h2>
        <ul className={s.list}>
          {services.map((item, index) => (
            <li key={index}>
              <Link className={s.link} href={`${href}${item.link}`}>
                <div>
                  <p className={s.softdoes}>SOFT DOES</p>
                  <Arrow className={s.arrow} />
                </div>
                {item.image}
                <h3 className={s.tag}>{item.title}</h3>
                <p className={s.text}>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
