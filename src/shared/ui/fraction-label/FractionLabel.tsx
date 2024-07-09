import styles from "./styles.module.scss";

type TFractionLabelProps = {
  label: string;
};

export const FractionLabel = (props: TFractionLabelProps) => {
  const { label } = props;

  return <div className={styles.fraction_label}>{label}</div>;
};
