import styles from "./styles.module.scss";
import React from "react";
import classNames from "classnames";

type TInputProps = {
  name?: string;
  type?: "text" | "number" | "tel";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = (props: TInputProps) => {
  const {
    placeholder,
    value,
    onChange,
    className,
    type = "text",
    name,
  } = props;

  return (
    <input
      name={name}
      type={type}
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};
