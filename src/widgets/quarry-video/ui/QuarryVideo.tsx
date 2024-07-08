import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import video from "shared/assets/videos/Deftones.mp4";
import { Panel } from "shared/ui/panel/Panel.tsx";

export const QuarryVideo = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Видео с карьера Гаврилово" color="gray" />
      <Panel className={styles.container_video}>
        <video autoPlay muted loop src={video} className={styles.video} />
      </Panel>
    </div>
  );
};
