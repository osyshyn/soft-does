"use client";

import { useCallback } from "react";
import s from "./scroll-to-contact.module.scss";
import clsx from "clsx";

interface ScrollToContactProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollToContact: React.FC<ScrollToContactProps> = ({
  children,
  className = "",
}) => {
  const handleClick = useCallback(() => {
    const contactsForm = document.getElementById("contacts");
    if (contactsForm) {
      contactsForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className={clsx(className ? className : s.button)}
      type="button"
      aria-label="Scroll to contact form"
    >
      {children}
    </button>
  );
};

export default ScrollToContact;
