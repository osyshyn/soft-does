import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero-text.module.scss";

const HeroText = ({
  title,
  text,
  buttonText,
}: {
  title: string;
  text: string;
  buttonText: string;
}) => {
  return (
    <div className={s.content}>
      <Kansas />
      <h1 className={s.title}>{title}</h1>
      <p className={s.tagText}>{text}</p>
      <div>
        <button className={s.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default HeroText;
