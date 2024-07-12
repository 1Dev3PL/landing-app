import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Panel } from "shared/ui/panel/Panel.tsx";
import styles from "./styles.module.scss";
import { Button } from "shared/ui/button/Button.tsx";
import { Content } from "shared/ui/content/Content.tsx";
import video1 from "shared/assets/images/video1.png"

export const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <Content>
        <div className={styles.block_container}>
          <Panel className={styles.panel}>
            <div className={styles.status_code}>404</div>
            <div className={styles.description}>
              {"Кажется такой\nстраницы больше нет"}
            </div>
            <div className={styles.buttons_container}>
              <Button color={"ultramarine"}>Каталог продукции</Button>
              <Button color={"gray"}>На главную</Button>
            </div>
          </Panel>
          <div>
            <img className={styles.video} src={video1} alt={""}/>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
};
