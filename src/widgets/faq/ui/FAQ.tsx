import styles from "./styles.module.scss"
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { QuestionsGrid } from "shared/ui/questions-grid/QuestionsGrid.tsx";
import { questions } from "shared/db/db.ts";

export const FAQ = () => {
  return(
    <div className={styles.container}>
      <BlockHeader title="Часто задаваемые вопросы" color="ultramarine" />
      <QuestionsGrid questions={questions} />
    </div>
  );
}