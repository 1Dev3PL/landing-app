import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import React from "react";

type TModalProps = {
  children: React.ReactNode;
};

export const Modal = (props: TModalProps) => {
  const { children } = props;

  return (
    <>
      {createPortal(
        <div className={styles.modal_container}>{children}</div>,
        document.body,
      )}
    </>
  );
};
