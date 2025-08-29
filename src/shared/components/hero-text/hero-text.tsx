import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero-text.module.scss";
import clsx from "clsx";
import { HideContacts } from "@shared/providers/no-contact-provider";
import { ScrollToContact } from "../scroll-to-contact";

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
  return (
    <div className={clsx(s.content, className)}>
      <div className={s.kansas}>
        <Kansas />
      </div>
      <h1 className={s.title}>
        {titleSpan && <span>{titleSpan}</span>} {title}
      </h1>
      <p className={s.tagText}>{text}</p>

      <HideContacts>
        <ScrollToContact>{buttonText}</ScrollToContact>
      </HideContacts>
    </div>
  );
};

export default HeroText;
