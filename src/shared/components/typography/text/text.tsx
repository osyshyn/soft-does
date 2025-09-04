import React from "react";
import s from "./text.module.scss";

interface TextProps {
  variant: "text-2xl" | "text-xl" | "text-lg" | "text-md" | "text-sm";
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export const Text: React.FC<TextProps> = ({
  variant,
  children,
  className,
  as = "p",
}) => {
  const Component = as;

  return (
    <Component className={`${s.text} ${s[variant]} ${className || ""}`}>
      {children}
    </Component>
  );
};

// Convenience components for each text level
export const Text2Xl: React.FC<Omit<TextProps, "variant">> = (props) => (
  <Text variant="text-2xl" {...props} />
);

export const TextXl: React.FC<Omit<TextProps, "variant">> = (props) => (
  <Text variant="text-xl" {...props} />
);

export const TextLg: React.FC<Omit<TextProps, "variant">> = (props) => (
  <Text variant="text-lg" {...props} />
);

export const TextMd: React.FC<Omit<TextProps, "variant">> = (props) => (
  <Text variant="text-md" {...props} />
);

export const TextSm: React.FC<Omit<TextProps, "variant">> = (props) => (
  <Text variant="text-sm" {...props} />
);
