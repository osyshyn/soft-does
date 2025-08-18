"use client";
import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero-text.module.scss";
import clsx from "clsx";
import { useNoContacts } from "providers/NoContactProvider";

const HeroText = ({
  title,
  titleSpan,
  text,
  buttonText,
  className,
}: {
  title: string;
  titleSpan?: string;
  text: string | React.ReactNode;
  buttonText: string;
  className?: string;
}) => {
  const { noContacts } = useNoContacts();

  const handleClick = () => {
    const contactsForm = document.getElementById("contacts");
    if (contactsForm) {
      contactsForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={clsx(s.content, className)}>
      <div className={s.kansas}>
        <Kansas />
      </div>
      <h1 className={s.title}>
        {titleSpan && <span>{titleSpan}</span>} {title}
      </h1>
      <p className={s.tagText}>{text}</p>
      <div>
        {!noContacts && (
          <button onClick={handleClick} className={s.button}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroText;
