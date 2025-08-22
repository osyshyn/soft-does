"use client";

import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";
import data from "@texts/main/index";
import clsx from "clsx";
import s from "./contacts.module.scss";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { useNoContacts } from "providers/NoContactProvider";

export const Contacts = () => {
  const { noContacts } = useNoContacts();
  if (noContacts) return null;

  return (
    <section className={clsx(s.root, s.wrapper)} id="contacts">
      <div className={clsx(s.content, "container")}>
        <ul className={s.contactsList}>
          {Object.values(data.contacts).map((item) => (
            <li key={item.contact} className={s.listItem}>
              <div className={s.itemContentWrapper}>
                <p className={s.listItemTitle}>{item.title}</p>
                <PreservingLink
                  href={item.to}
                  target="_blank"
                  className={s.listItemLink}
                >
                  <p>{item.contact}</p>
                  <ArrowUpAndRight className={s.arrowIcon} />
                </PreservingLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
