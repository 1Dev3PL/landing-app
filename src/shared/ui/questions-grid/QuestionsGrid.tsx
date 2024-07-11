import styles from "./styles.module.scss";
import { TQuestion } from "shared/db/db.ts";
import { Question } from "shared/ui/question/Question.tsx";

type TQuestionGridProps = {
  questions: TQuestion[];
};

export const QuestionsGrid = (props: TQuestionGridProps) => {
  const { questions } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        {questions.map((question, index) => (index % 2 === 0 &&
          <Question
            key={index}
            question={question.question}
            answer={question.answer}
            className={styles.question}
          />
        ))}
      </div>
      <div className={styles.container_inner}>
        {questions.map((question, index) => (index % 2 !== 0 &&
          <Question
            key={index}
            question={question.question}
            answer={question.answer}
            className={styles.question}
          />
        ))}
      </div>
    </div>
  );
};
