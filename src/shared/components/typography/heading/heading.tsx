import React from "react";
import s from "./heading.module.scss";

interface HeadingProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
  className,
  as,
}) => {
  const Component = as || variant;

  return (
    <Component className={`${s.heading} ${s[variant]} ${className || ""}`}>
      {children}
    </Component>
  );
};

// Convenience components for each heading level
export const H1: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h1" {...props} />
);

export const H2: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h2" {...props} />
);

export const H3: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h3" {...props} />
);

export const H4: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h4" {...props} />
);

export const H5: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h5" {...props} />
);

export const H6: React.FC<Omit<HeadingProps, "variant">> = (props) => (
  <Heading variant="h6" {...props} />
);
