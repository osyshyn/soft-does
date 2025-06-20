import Image from "next/image";

import map from "@assets/images/contact/map.png";
import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";

import s from "./contacts.module.scss";

interface ContactsProps {
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

export const Contacts = ({ data }: ContactsProps) => {
  const contactList = Object.entries(data);

  return (
    <section className={s.root}>
      <div>
        <Image aria-hidden alt="" className={s.img} src={map.src} width={map.width} height={map.height} />
      </div>
      <div>
        <ul>
          {contactList.map(([key, { title, link }]) => {
            const href = key === "phone" ? `tel:${link.replace(/\s+/g, "")}` : `mailto:${link}`;
            return (
              <li key={key}>
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
