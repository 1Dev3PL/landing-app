import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

type TBlockHeader = {
  children?: ReactNode;
  title: string;
  color: "ultramarine" | "gray";
};

export const BlockHeader = (props: TBlockHeader) => {
  const { children, title, color } = props;

  return (
    <div
      className={classNames(styles.block_header, {
        [styles.block_header_ultramarine]: color === "ultramarine",
        [styles.block_header_gray]: color === "gray",
      })}
    >
      <h2
        className={classNames(styles.title, {
          [styles.title_ultramarine]: color === "ultramarine",
          [styles.title_gray]: color === "gray",
        })}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};
