import { useContext, useRef } from 'react';
import { AccordionItemContext } from '../accordion-item-context/accordion-item-context';
import { clsx } from 'clsx';

import s from './accordion-content.module.scss';

interface IProps {
  children: React.JSX.Element;
  className?: string;
}

export const AccordionContent = ({ children, className }: IProps) => {
  const { open } = useContext(AccordionItemContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const height = ref.current?.scrollHeight || 0;

  return (
    <div
      className={clsx(s.root, className)}
      style={{ '--height-var': `${height}px` } as React.CSSProperties}
      ref={ref}
      data-open={open}
    >
      {children}
    </div>
  );
};
