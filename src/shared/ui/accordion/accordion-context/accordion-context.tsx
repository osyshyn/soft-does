import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextProps {
  activeQuestion: null | string;
  setActiveQuestion: Dispatch<SetStateAction<null | string>>;
}

export const AccordionContext = createContext<ContextProps>({
  activeQuestion: null,
  setActiveQuestion: () => null,
});
