"use client";
import { Accordion } from "@shared/ui/accordion";
import { FaqAccordionItem } from "@shared/components/faq-accordion-item/faq-accordion-item";

import data from "@texts/main/index";
import s from "./faq.module.scss";
import clsx from "clsx";
import { H2 } from "@shared/components/typography";
import { usePathname } from "next/navigation";

export const FAQ = () => {
  const pathname = usePathname();
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.content, "container")}>
        <H2 className={s.title}>{data.faq.title}</H2>

        <Accordion.Root className={s.accordionRoot}>
          {pathname.includes('/ai-and-ml/ai-development')
            ? data.faq.listAiMl.map(item => (
                <FaqAccordionItem item={item} key={item.question.text} />
              ))
            : data.faq.list.map(item => (
                <FaqAccordionItem item={item} key={item.question.text} />
              ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
