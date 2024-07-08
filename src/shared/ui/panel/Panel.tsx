import classNames from "classnames";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

type TPanelProps = {
  children: ReactNode;
  className?: string;
};

export const Panel = (props: TPanelProps) => {
  const { children, className } = props;

  return <div className={classNames(styles.panel, className)}>{children}</div>;
};
