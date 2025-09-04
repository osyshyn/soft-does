"use client";

import { ArrowUpAndRight } from "@shared/assets/icons/arrow-up-and-right";
import data from "@texts/main/index";
import clsx from "clsx";
import s from "./contact-info.module.scss";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { useNoContacts } from "@shared/providers/no-contact-provider";
import { H5, TextMd } from "@shared/components/typography";

export const ContactInfo = () => {
  const { noContacts } = useNoContacts();
  if (noContacts) return null;

  return (
    <section className={clsx(s.root, s.wrapper)} id="contacts">
      <div className={clsx(s.content, "container")}>
        <ul className={s.contactsList}>
          {Object.values(data.contacts).map((item) => (
            <li key={item.contact} className={s.listItem}>
              <div className={s.itemContentWrapper}>
                <TextMd className={s.listItemTitle}>{item.title}</TextMd>

                <PreservingLink
                  href={item.to}
                  target="_blank"
                  className={s.listItemLink}
                >
                  <H5>{item.contact}</H5>
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

export default ContactInfo;
