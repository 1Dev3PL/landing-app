import styles from "./styles.module.scss";
import React from "react";
import classNames from "classnames";

type TTextareaProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

export const Textarea = (props: TTextareaProps) => {
  const { placeholder, value, onChange, className } = props;

  return (
    <textarea
      className={classNames(styles.textarea, className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};
