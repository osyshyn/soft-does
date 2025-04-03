import { useState } from 'react';
import { AccordionContext } from '../accordion-context/accordion-context';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionRoot = ({ children, className }: IProps) => {
  const [activeQuestion, setActiveQuestion] = useState<null | string>(null);

  return (
    <AccordionContext.Provider value={{ activeQuestion, setActiveQuestion }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};
