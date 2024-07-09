import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import arrowClosed from "shared/assets/icons/arrowClosed.svg";
import arrowOpened from "shared/assets/icons/arrowOpened.svg";

type TQuestionProps = {
  question: string;
  answer: string;
};

export const Question = (props: TQuestionProps) => {
  const { question, answer } = props;
  const [isActive, setIsActive] = useState(false);

  const handleIsActiveChange = () => {
    setIsActive(!isActive);
  };

  if (!isActive) {
    return (
      <div className={styles.container}>
        <div
          className={classNames(styles.question, styles.no_answer)}
          onClick={handleIsActiveChange}
        >
          {question}
          <img src={arrowClosed} alt="arrowClosed" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div
          className={classNames(styles.question, styles.with_answer)}
          onClick={handleIsActiveChange}
        >
          {question}
          <img src={arrowOpened} alt="arrowOpened" />
        </div>
        <div className={styles.answer}>{answer}</div>
      </div>
    );
  }
};
