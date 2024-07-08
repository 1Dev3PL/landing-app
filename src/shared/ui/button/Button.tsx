import classNames from "classnames";
import styles from "./styles.module.scss";

type TButtonProps = {
  title: string;
  onClick?: () => void;
  color: "ultramarine" | "gray";
  className?: string;
  size?: "small" | "base";
};

export const Button = (props: TButtonProps) => {
  const { color, title, onClick, className, size = "base" } = props;

  return (
    <button
      className={classNames(styles.button, className, {
        [styles.button_ultramarine]: color === "ultramarine",
        [styles.button_gray]: color === "gray",
        [styles.button_small]: size === "small",
        [styles.button_base]: size === "base",
      })}
      title={title}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
