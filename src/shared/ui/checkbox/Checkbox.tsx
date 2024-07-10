import styles from "./styles.module.scss";
import React from "react";

type TCheckboxProps = {
  label?: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  className?: string;
};

export const Checkbox = (props: TCheckboxProps) => {
  const { label, checked, onChange } = props;

  return (
    <label className={styles.container}>
      <input
        className={styles.checkbox}
        onChange={onChange}
        type={"checkbox"}
        checked={checked}
      />
      {label}
    </label>
  );
};
