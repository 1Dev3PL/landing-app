import styles from "./styles.module.scss";
import { MapComponent } from "shared/ui/map/MapComponent.tsx";
import { TPlacemark } from "shared/db/db.ts";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { useState } from "react";
import { ChooseFactory } from "shared/ui/choose-factory/ChooseFactory.tsx";

type TFactoriesProps = {
  factories: TPlacemark[];
};

export const Factories = (props: TFactoriesProps) => {
  const { factories } = props;
  const [option, setOption] = useState(0);

  const handleOptionChange = (id: number) => {
    setOption(id);
  };

  const handleOnPlacemarkClick = (id: number) => {
    setOption(id);
  };

  const factoriesForMapComponent = factories.map((factory) => ({
    id: factory.id,
    latitude: factory.latitude,
    longitude: factory.longitude,
    description: factory.description,
  }));

  const factoriesForChooseFactoryComponent = factories.map((factory) => ({
    id: factory.id,
    title: factory.title,
    address: factory.address,
    goods: factory.goods ? factory.goods : [],
  }));

  return (
    <div className={styles.container}>
      <BlockHeader title="Работаем по всей территории РФ" color="gray" />
      <MapComponent
        placemarks={factoriesForMapComponent}
        centerCoords={[factories[option].latitude, factories[option].longitude]}
        zoom={18}
        handleOnPlacemarkClick={handleOnPlacemarkClick}
      />
      <ChooseFactory
        factories={factoriesForChooseFactoryComponent}
        handleOptionChange={handleOptionChange}
        option={option}
      />
    </div>
  );
};
