import data from "@texts/main/index";
import s from "./talk-to-us.module.scss";
import clsx from "clsx";
import { ScrollToContact } from "@shared/components/scroll-to-contact";
import { HideContacts } from "@shared/providers/no-contact-provider";
import { H4, Text } from "@shared/components/typography";

import img from "@assets/images/main/faq-image.png";
import Image from "next/image";

export const TalkToUs = () => {
  return (
    <div className={clsx(s.wrapper, "wrapper")}>
      <section className={clsx(s.root, "container")}>
        <div className={s.leftWrapper}>
          <H4 className={s.title}>{data.talkToUs.title}</H4>
          <Text variant="text-lg" className={s.description}>
            {data.talkToUs.description}
          </Text>
        </div>

        <div className={s.rightWrapper}>
          <HideContacts>
            <ScrollToContact className={s.button}>
              {data.talkToUs.buttonText}
            </ScrollToContact>
          </HideContacts>
        </div>

        <div className={s.imageWrapper}>
          <div className={s.image}>
            <Image fill aria-hidden src={img.src} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkToUs;
