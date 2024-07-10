import styles from "./styles.module.scss"
import { Panel } from "shared/ui/panel/Panel.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import { SelectComponent } from "shared/ui/select/SelectComponent.tsx";

type TFactory = {
  id: number;
  title: string | undefined;
  address: string | undefined;
  goods: string[];
}

type TChooseFactory = {
  factories: TFactory[];
  handleOptionChange: (id: number) => void;
  option: number;
}

export const ChooseFactory = (props: TChooseFactory) => {
  const {factories, handleOptionChange, option} = props;

  const factoryTitles = factories.map(factory => ({id: factory.id, title: factory.title}))

  return (
    <Panel className={styles.container}>
      <div className={styles.container_upper}>
        <div className={styles.title}>Выберите завод</div>
        <div className={styles.address}>
          <SelectComponent handleOptionChange={handleOptionChange} factories={factoryTitles} option={option} />

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