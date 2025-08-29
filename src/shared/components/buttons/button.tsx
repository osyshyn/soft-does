import React from "react";
import clsx from "clsx";
import s from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "white";
  rounded?: "md" | "lg";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  variant = "primary",
  rounded = "md",
  size = "md",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        s.btn,
        s[variant],
        rounded && s[`rounded-${rounded}`],
        s[size],
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
