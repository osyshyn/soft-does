"use client";

import {
  useContext,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { AccordionItemContext } from "../accordion-item-context/accordion-item-context";
import { clsx } from "clsx";

import s from "./accordion-content.module.scss";

interface IProps {
  children: React.JSX.Element;
  className?: string;
}

export const AccordionContent = ({ children, className }: IProps) => {
  const { open } = useContext(AccordionItemContext);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, []);

  const debouncedUpdateHeight = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(updateHeight, 10);
  }, [updateHeight]);

  // Use useLayoutEffect for initial height calculation to prevent flicker
  useLayoutEffect(() => {
    updateHeight();
  }, [children, updateHeight]);

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdateHeight();
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedUpdateHeight]);

  return (
    <div
      className={clsx(s.root, className)}
      style={
        {
          height: open === "open" ? `${height}px` : "0px",
          "--content-height": `${height}px`,
        } as React.CSSProperties
      }
      data-open={open}
    >
      <div ref={contentRef} className={s.content}>
        {children}
      </div>
    </div>
  );
};
