import { createContext } from 'react';

interface AccordionItemContextProps {
  value: string;
  open: 'open' | 'closed';
}

export const AccordionItemContext = createContext<AccordionItemContextProps>({
  value: '',
  open: 'closed',
});
