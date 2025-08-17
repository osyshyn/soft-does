'use client';
import data from "@texts/main/index.json";
import s from "./talk-to-us.module.scss";
import { MouseEventHandler } from "react";
import clsx from "clsx";
import { useNoContacts } from "providers/NoContactProvider";

export const TalkToUs = () => {
  const { noContacts } = useNoContacts();
  if (noContacts) return null;

  const onClick: MouseEventHandler = (e) => {
    e.preventDefault();

    const contacts = document.querySelector("#contacts");

    if (!contacts) return;

    contacts.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={clsx(s.wrapper, "wrapper")}>
      <section className={clsx(s.root, "container")}>
        <div className={s.leftWrapper}>
          <h2 className={s.title}>{data.talkToUs.title}</h2>
          <p className={s.description}>{data.talkToUs.description}</p>
        </div>
        <div className={s.rightWrapper}>
          <button type="button" className={s.button} onClick={onClick}>
            {data.talkToUs.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TalkToUs;
