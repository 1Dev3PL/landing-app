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
      {questions.map((question) => (
        <Question
          question={question.question}
          answer={question.answer}
          className={styles.question}
        />
      ))}
    </div>
  );
};
