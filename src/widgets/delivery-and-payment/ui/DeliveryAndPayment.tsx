import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import image from "shared/assets/images/delivery.png";
import icon from "shared/assets/icons/check.svg";

export const DeliveryAndPayment = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Доставка и оплата" color="ultramarine" />
      <div className={styles.container_inner}>
        <div className={styles.container_upper}>
          <Panel className={styles.container_left}>
            <img src={image} alt="deliveryTruck" className={styles.image} />
          </Panel>
          <Panel className={styles.container_right}>
            <div className={styles.header}>
              {
                "Петратерра доставляет\nнерудные материалы\nпо территории\nСанкт-Петербурга и ЛО"
              }
            </div>
            <div className={styles.text}>
              {"Мы поставляем продукцию\nс использованием"}
            </div>
          </Panel>
        </div>
        <div className={styles.container_lower}>
          <Panel className={styles.small_panel}>
            <div>
              <img src={icon} alt="check" />
            </div>
            <div>{"Тягачей с полуприцепами\nтипа «тонар» (до 40 тонн)"}</div>
          </Panel>
          <Panel className={styles.small_panel}>
            <div>
              <img src={icon} alt="check" />
            </div>
            <div>{"Четырехосных\nсамосвалов (до 40 тонн)"}</div>
          </Panel>
          <Panel className={styles.small_panel}>
            <div>
              <img src={icon} alt="check" />
            </div>
            <div>{"Трехосных\nсамосвалов ( до 30 тонн)"}</div>
          </Panel>
          <Panel className={styles.small_panel}>
            <div>
              <img src={icon} alt="check" />
            </div>
            <div className={styles.text_jd}>Ж/д транспорта</div>
          </Panel>
        </div>
      </div>
    </div>
  );
};
