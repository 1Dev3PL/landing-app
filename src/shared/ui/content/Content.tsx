import styles from "./styles.module.scss";

type TContentProps = {
  children?: React.ReactNode;
};

export const Content = (props: TContentProps) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>{children}</div>
    </div>
  );
};
