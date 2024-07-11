import styles from "./styles.module.scss";
import React from "react";

type TCheckboxProps = {
  name?: string;
  label?: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Checkbox = (props: TCheckboxProps) => {
  const { label, checked, onChange, name } = props;

  return (
    <label className={styles.container}>
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
