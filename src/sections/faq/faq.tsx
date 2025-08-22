import { Accordion } from "@shared/ui/accordion";
import { FaqAccordionItem } from "@shared/components/faq-accordion-item/faq-accordion-item";
import img from "@assets/images/main/faq-image.png";

import data from "@texts/main/index";
import s from "./faq.module.scss";
import Image from "next/image";
import clsx from "clsx";

export const FAQ = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <Image
          aria-hidden
          src={img.src}
          alt=""
          className={s.img}
          width={img.width}
          height={img.height}
        />

        <h2 className={s.title}>{data.faq.title}</h2>

        <Accordion.Root className={s.accordionRoot}>
          {data.faq.list.map((item) => (
            <FaqAccordionItem item={item} key={item.question.text} />
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
