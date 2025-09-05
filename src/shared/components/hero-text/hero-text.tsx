import { Kansas } from "@shared/components/kansas/kansas";

import s from "./hero-text.module.scss";
import clsx from "clsx";
import { HideContacts } from "@shared/providers/no-contact-provider";
import { ScrollToContact } from "../scroll-to-contact";
import { H1, TextLg } from "../typography";

const HeroText = ({
  title,
  titleSpan,
  text,
  buttonText,
  className,
  titleClassName,
}: {
  title: string;
  titleSpan?: string;
  text?: string | React.ReactNode;
  buttonText: string;
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={clsx(s.content, className)}>
      <div className={s.kansas}>
        <Kansas />
      </div>

      <H1 className={clsx(s.title, titleClassName)}>
        {titleSpan && <span>{titleSpan}</span>} {title}
      </H1>

      {text && <TextLg className={s.tagText}>{text}</TextLg>}

      <HideContacts>
        <ScrollToContact>{buttonText}</ScrollToContact>
      </HideContacts>
    </div>
  );
};

export default HeroText;
