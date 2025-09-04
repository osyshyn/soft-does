import { Accordion } from "@shared/ui/accordion";
import { FaqAccordionItem } from "@shared/components/faq-accordion-item/faq-accordion-item";

import data from "@texts/main/index";
import s from "./faq.module.scss";
import clsx from "clsx";
import { H2 } from "@shared/components/typography";

export const FAQ = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <H2 className={s.title}>{data.faq.title}</H2>

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
