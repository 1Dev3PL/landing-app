import classNames from "classnames";
import styles from "./styles.module.scss";

type TButtonProps = {
  iconSrc?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  color: "ultramarine" | "light_gray" | "gray";
  className?: string;
  size?: "small" | "base";
  children?: string;
};

export const Button = (props: TButtonProps) => {
  const {
    iconSrc,
    color,
    onClick,
    className,
    size = "base",
    children,
    type = "button",
  } = props;

  return (
    <button
      type={type}
      className={classNames(styles.button, className, {
        [styles.button_ultramarine]: color === "ultramarine",
        [styles.button_light_gray]: color === "light_gray",
        [styles.button_gray]: color === "gray",
        [styles.button_small]: size === "small",
        [styles.button_base]: size === "base",
      })}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={""} />}
      {children}
    </button>
  );
};
