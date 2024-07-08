import styles from "./styles.module.scss";
import { useState } from "react";

type TQuestionProps = {
  question: string;
  answer: string;
}

export const Question = (props: TQuestionProps) => {
  const {question, answer} = props;
  const [isActive, setIsActive] = useState(false);

  const handleIsActiveChange = () => {
    setIsActive(!isActive);
  }

  if (!isActive) {
    return(
      <div className={styles.container}>
        <div className={styles.question} onClick={handleIsActiveChange}>
          {question}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.question} onClick={handleIsActiveChange}>
          {question}
        </div>
        <div className={styles.answer}>
          {answer}
        </div>
      </div>
    );
  }
}