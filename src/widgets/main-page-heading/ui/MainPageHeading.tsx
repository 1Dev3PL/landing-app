import { Panel } from "shared/ui/panel/Panel";
import styles from "./styles.module.scss";
import logo from "shared/assets/images/pnkLogo.svg";
import hammer from "shared/assets/icons/hammer.svg";
import marker from "shared/assets/icons/marker.svg";
import crane from "shared/assets/icons/crane.svg";
import building from "shared/assets/icons/building.svg";
import video1 from "shared/assets/images/video1.png";
import { Button } from "shared/ui/button/Button";

export const MainPageHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper_container}>
        <Panel className={styles.left_column}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Нерудные материалы</h1>
            <div className={styles.logo_container}>
              <img src={logo} alt="pnk_logo" />
            </div>
          </div>
          <div className={styles.description}>
            {
              "ООО „Петратерра“ является официальным\nпредставителем Гавриловского щебеночного\nзавода — филиал АО „ПНК“ на территории СЗФО"
            }
          </div>
          <div className={styles.buttons_container}>
            <Button color="ultramarine">Каталог продукции</Button>
            <Button color="gray">Оставить заявку</Button>
          </div>
        </Panel>
        <Panel className={styles.right_column}>
          <img src={video1} alt={"video"} className={styles.video} />
          {/*<video autoPlay muted loop src={video} className={styles.video} />*/}
        </Panel>
      </div>
      <div className={styles.lower_container}>
        <Panel className={styles.small_panel}>
          <div className={styles.icon_container}>
            <img src={hammer} alt="hammer" className={styles.icon} />
          </div>
          <div className={styles.text}>
            Работаем напрямую с производителем материалов
          </div>
        </Panel>
        <Panel className={styles.small_panel}>
          <div className={styles.icon_container}>
            <img src={marker} alt="marker" className={styles.icon} />
          </div>
          <div className={styles.text}>
            Карьер завода находится в Выборгском районе ЛО
          </div>
        </Panel>
        <Panel className={styles.small_panel}>
          <div className={styles.icon_container}>
            <img src={crane} alt="crane" className={styles.icon} />
          </div>
          <div className={styles.text}>Удобная площадка для погрузки</div>
        </Panel>
        <Panel className={styles.small_panel}>
          <div className={styles.icon_container}>
            <img src={building} alt="building" className={styles.icon} />
          </div>
          <div className={styles.text}>
            Материалы всегда в наличие на нашем складе
          </div>
        </Panel>
      </div>
    </div>
  );
};
