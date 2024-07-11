import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { questions } from "shared/db/db.ts";
import { Question } from "shared/ui/question/Question.tsx";

export const FAQ = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Часто задаваемые вопросы" color="ultramarine" />
      <div className={styles.container_questions}>
        <div className={styles.container_inner}>
          {questions.map(
            (question, index) =>
              index % 2 === 0 && (
                <Question
                  key={index}
                  question={question.question}
                  answer={question.answer}
                />
              ),
          )}
        </div>
        <div className={styles.container_inner}>
          {questions.map(
            (question, index) =>
              index % 2 !== 0 && (
                <Question
                  key={index}
                  question={question.question}
                  answer={question.answer}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};
