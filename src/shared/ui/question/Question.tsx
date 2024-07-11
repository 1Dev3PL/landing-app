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
    <div className={classNames([styles.container], className)}>
      <div className={styles.container_inner} onClick={handleIsActiveChange}>
        <div
          className={classNames([styles.question], {
            [styles.no_answer]: !isActive,
            [styles.with_answer]: isActive,
          })}
        >
          {question}
          <img
            src={arrowClosed}
            alt="arrowClosed"
            className={classNames(styles.arrow, {
              [styles.arrow_rotated]: isActive,
            })}
          />
        </div>
      </div>
      {isActive && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};
