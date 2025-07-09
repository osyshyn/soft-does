import data from "@texts/main/index.json";
import s from "./contacts.module.scss";
import Link from "next/link";
import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";
import clsx from "clsx";

export const Contacts = () => (
  <section className={clsx(s.root, s.wrapper)} id="contacts">
    <div className={clsx(s.content, "container")}>
      <ul className={s.contactsList}>
        {Object.values(data.contacts).map((item) => (
          <li key={item.contact} className={s.listItem}>
            <div className={s.itemContentWrapper}>
              <p className={s.listItemTitle}>{item.title}</p>
              <Link href={item.to} target="_blank" className={s.listItemLink}>
                <p>{item.contact}</p>
                <ArrowUpAndRight className={s.arrowIcon} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
