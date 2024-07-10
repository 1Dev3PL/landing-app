import styles from "./styles.module.scss"
import { TPlacemark } from "shared/db/db.ts";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import arrowIcon from "shared/assets/icons/factoryArrow.svg"
import { useState } from "react";

type TChooseFactory = {
  factories: TPlacemark[];
  handleOptionChange: (e: never) => void;
  option: number;
}

export const ChooseFactory = (props: TChooseFactory) => {
  const {factories, handleOptionChange, option} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Panel className={styles.container}>
      <div className={styles.container_upper}>
        <div className={styles.title}>Выберите завод</div>
        <div className={styles.address}>
          <div className={styles.container_select}>
            <select className={styles.select_box} onChange={handleOptionChange} onClick={handleOnClick}>
              {factories.map((factory) => (
                <option key={factory.id} value={factory.id}>
                  {factory.title}
                </option>
              ))}
            </select>
            <div className={styles.container_icon}>
              <img src={arrowIcon} alt="arrowIcon" className={isOpen ? `${styles.arrow} ${styles.arrow_open}` : styles.arrow}/>
            </div>
          </div>
          <div className={styles.text}>{factories[option].address}</div>
          <Button color="ultramarine">Задать вопрос</Button>
        </div>
      </div>
      <div className={styles.container_lower}>
        <div className={styles.subtitle}>Производимая продукция</div>
        <div className={styles.goods}>
          {factories[option].goods &&
            factories[option].goods.map((good, index) => (
              <div key={index} className={styles.good}>
                {good}
              </div>
            ))}
        </div>
      </div>
    </Panel>
  );
}