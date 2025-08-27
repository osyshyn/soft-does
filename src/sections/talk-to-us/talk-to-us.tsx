import data from "@texts/main/index";
import s from "./talk-to-us.module.scss";
import clsx from "clsx";
import { ScrollToContact } from "@shared/components/scroll-to-contact";
import { HideContacts } from "@shared/providers/no-contact-provider";

export const TalkToUs = () => {
  return (
    <div className={clsx(s.wrapper, "wrapper")}>
      <section className={clsx(s.root, "container")}>
        <div className={s.leftWrapper}>
          <h2 className={s.title}>{data.talkToUs.title}</h2>
          <p className={s.description}>{data.talkToUs.description}</p>
        </div>

        <div className={s.rightWrapper}>
          <HideContacts>
            <ScrollToContact className={s.button}>
              {data.talkToUs.buttonText}
            </ScrollToContact>
          </HideContacts>
        </div>
      </section>
    </div>
  );
};

export default TalkToUs;
