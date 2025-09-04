import clsx from "clsx";
import s from "./input.module.scss";
import { TextLg } from "@shared/components/typography";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.JSX.Element;
  id: string;
  className?: string;
  isTextarea?: boolean;
}

export const Input = ({
  label,
  id,
  className,
  isTextarea = false,
  ...rest
}: IProps) => (
  <div className={clsx(s.inputWrapper, className)}>
    {label && (
      <label htmlFor={id} className={s.label}>
        <TextLg>{label}</TextLg>
      </label>
    )}
    {!isTextarea ? (
      <input
        className={s.input}
        id={id}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    ) : (
      <textarea
        className={s.textarea}
        id={id}
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    )}
  </div>
);
