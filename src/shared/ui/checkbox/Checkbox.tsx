import styles from "./styles.module.scss";
import React from "react";
import classNames from "classnames";

type TCheckboxProps = {
  name?: string;
  label?: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Checkbox = (props: TCheckboxProps) => {
  const { label, checked, onChange, name, className } = props;

  return (
    <label className={classNames(styles.container, className)}>
      <input
        name={name}
        className={styles.checkbox}
        onChange={onChange}
        type={"checkbox"}
        checked={checked}
      />
      {label}
    </label>
  );
};
