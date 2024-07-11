import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import arrowClosed from "shared/assets/icons/arrowClosed.svg";

type TQuestionProps = {
  question: string;
  answer: string;
  className?: string;
};

export const Question = (props: TQuestionProps) => {
  const { question, answer, className } = props;
  const [isActive, setIsActive] = useState(false);

  const handleIsActiveChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={classNames(
        `${styles.container} ${styles.no_answer}`,
        className,
      )}
    >
      <div className={styles.question} onClick={handleIsActiveChange}>
        {question}
        <img
          src={arrowClosed}
          alt="arrowClosed"
          className={classNames(styles.arrow, {[styles.arrow_rotated]: isActive})}
        />
      </div>
      {isActive && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};
