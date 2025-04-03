import { useContext } from 'react';
import { AccordionContext } from '../accordion-context/accordion-context';
import { AccordionItemContext } from '../accordion-item-context/accordion-item-context';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionTrigger = ({ children, className }: IProps) => {
  const accordionContext = useContext(AccordionContext);
  const accordionItemContext = useContext(AccordionItemContext);

  const onClick = () => {
    accordionContext.setActiveQuestion(p =>
      p === accordionItemContext.value ? null : accordionItemContext.value
    );
  };

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};
