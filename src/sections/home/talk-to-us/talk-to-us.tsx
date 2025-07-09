import data from "@texts/main/index.json";
import s from "./talk-to-us.module.scss";
import { MouseEventHandler } from "react";

export const TalkToUs = () => {
  const onClick: MouseEventHandler = (e) => {
    e.preventDefault();

    const contacts = document.querySelector("#contacts");

    if (!contacts) return;

    contacts.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={s.root}>
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
  );
};
