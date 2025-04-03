import { Accordion } from '@shared/ui/accordion';
import { Plus } from '@shared/assets/icons/plus';
import s from './faq-accordion-item.module.scss';

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
        <h3 className={s.question}>{item.question.text}</h3>

        <div className={s.iconWrapper}>
          <Plus className={s.plusIcon} />
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <p className={s.answer}>{item.answer.text}</p>
      </Accordion.Content>
    </div>
  </Accordion.Item>
);
