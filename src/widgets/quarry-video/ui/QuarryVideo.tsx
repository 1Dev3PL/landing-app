import styles from "./styles.module.scss"
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import quarryVideo from "shared/assets/images/quarryVideo.png";

export const QuarryVideo = () => {
  return(
    <div className={styles.container}>
      <BlockHeader title="Видео с карьера Гаврилово" color="gray" />
      <div className={styles.container_video}>
        <img src={quarryVideo} alt="uarryVideo" className={styles.video} />
      </div>
    </div>
  );
}