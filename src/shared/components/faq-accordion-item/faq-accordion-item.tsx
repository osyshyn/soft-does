import { Accordion } from "@shared/ui/accordion";
import { Plus } from "@shared/assets/icons/plus";
import s from "./faq-accordion-item.module.scss";
import { Text2Xl, TextLg } from "../typography";

interface IProps {
  item: {
    question: {
      text: string;
    };
    answer: {
      text: string;
    };
  };
}

export const FaqAccordionItem = ({ item }: IProps) => (
  <Accordion.Item value={item.question.text} className={s.accordionItem}>
    <div>
      <Accordion.Trigger className={s.accordionQuestion}>
        <Text2Xl className={s.question}>{item.question.text}</Text2Xl>

        <div className={s.iconWrapper}>
          <Plus className={s.plusIcon} />
        </div>
      </Accordion.Trigger>

      <Accordion.Content className={s.accordionContent}>
        <TextLg className={s.answer}>{item.answer.text}</TextLg>
      </Accordion.Content>
    </div>
  </Accordion.Item>
);
