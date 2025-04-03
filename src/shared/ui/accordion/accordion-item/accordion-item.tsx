import { useContext } from 'react';
import { AccordionItemContext } from '../accordion-item-context/accordion-item-context';
import { AccordionContext } from '../accordion-context/accordion-context';

interface IProps {
  children: React.JSX.Element;
  className?: string;
  value: string;
}

export const AccordionItem = ({ children, className, value }: IProps) => {
  const { activeQuestion } = useContext(AccordionContext);

  const opened = () => {
    if (activeQuestion === null) return false;

    if (activeQuestion === value) return true;

    return false;
  };

  const open = opened() ? 'open' : 'closed';
  return (
    <AccordionItemContext.Provider value={{ value, open }}>
      <div className={className} id={value} data-open={open}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
