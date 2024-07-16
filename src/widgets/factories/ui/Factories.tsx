import styles from "./styles.module.scss";
import { MapComponent } from "shared/ui/map/MapComponent.tsx";
import { TPlacemark } from "shared/db/db.ts";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { useState } from "react";
import { SelectComponent } from "shared/ui/select/SelectComponent.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { Modal, TestForm } from "shared/ui/modal/ui/Modal.tsx";
import {QuestionForm} from "shared/ui/question-form/QuestionForm.tsx";

type TFactoriesProps = {
  factories: TPlacemark[];
};

export const Factories = (props: TFactoriesProps) => {
  const { factories } = props;
  const [option, setOption] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleOptionChange = (id: number) => {
    setOption(id);
  };

  const handlePlacemarkClick = (id: number) => {
    setOption(id);
  };

  const handleModalShownChange = () => {
    setIsModalShown(prev => !prev);
  }

  const factoriesForMapComponent = factories.map((factory) => ({
    id: factory.id,
    latitude: factory.latitude,
    longitude: factory.longitude,
    description: factory.description,
  }));

  const factoryTitles = factories.map((factory) => ({
    id: factory.id,
    title: factory.title,
  }));

  return (
    <div className={styles.container}>
      <BlockHeader title="Работаем по всей территории РФ" color="gray" />
      <MapComponent
        placemarks={factoriesForMapComponent}
        centerCoords={[factories[option].latitude, factories[option].longitude]}
        zoom={12}
        handlePlacemarkClick={handlePlacemarkClick}
      />
      <Panel className={styles.container_ui}>
        <div className={styles.container_upper}>
          <div className={styles.title}>Выберите завод</div>
          <div className={styles.address}>
            <SelectComponent
              handleOptionChange={handleOptionChange}
              items={factoryTitles}
              option={option}
            />
            <div className={styles.text_with_button}>
              <div className={styles.text}>{factories[option].address}</div>
              <Button color="ultramarine" onClick={handleModalShownChange}>
                Задать вопрос
              </Button>
              {isModalShown && (
                <Modal>
                  <QuestionForm handleClose={handleModalShownChange} />
                </Modal>
              )}
            </div>
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
    </div>
  );
};
