import Image from "next/image";

import map from "@assets/images/contact/map.png";
import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";

import s from "./map-info.module.scss";
import clsx from "clsx";

interface MapInfoProps {
  data: {
    project: {
      title: string;
      link: string;
    };
    careers: {
      title: string;
      link: string;
    };
    phone: {
      title: string;
      link: string;
    };
  };
}

export const MapInfo = ({ data }: MapInfoProps) => {
  const contactList = Object.entries(data);

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.root, "container")}>
        <div>
          <Image
            aria-hidden
            alt=""
            className={s.img}
            src={map.src}
            width={740}
            height={470}
          />
        </div>

        <div className={s.line} />

        <ul className={s.list}>
          {contactList.map(([key, { title, link }]) => {
            const href =
              key === "phone"
                ? `tel:${link.replace(/\s+/g, "")}`
                : `mailto:${link}`;
            return (
              <li className={s.list__item} key={key}>
                <p>{title}</p>
                <a href={href}>
                  {link}
                  <ArrowUpAndRight className={s.arrowIcon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MapInfo;
