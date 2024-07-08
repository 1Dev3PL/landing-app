import styles from "./styles.module.scss"
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";

export const FAQ = () => {
  return(
    <div className={styles.container}>
      <BlockHeader title="Часто задаваемые вопросы" color="ultramarine" />
      
    </div>
  );
}