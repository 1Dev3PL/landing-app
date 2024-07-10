import styles from "./styles.module.scss";
import { MapComponent } from "shared/ui/map/MapComponent.tsx";
import { TPlacemark } from "shared/db/db.ts";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { useMemo, useState } from "react";
import { ChooseFactory } from "shared/ui/choose-factory/ChooseFactory.tsx";

type TFactoriesProps = {
  factories: TPlacemark[];
};

export const Factories = (props: TFactoriesProps) => {
  const { factories } = props;
  const [option, setOption] = useState(0);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleOnPlacemarkClick = (id: number) => {
    setOption(id);
  };

  return (
    <div className={styles.container}>
      <BlockHeader title="Работаем по всей территории РФ" color="gray" />
      <MapComponent
        placemarks={factories}
        centerCoords={[factories[option].latitude, factories[option].longitude]}
        zoom={18}
        handleOnPlacemarkClick={handleOnPlacemarkClick}
      />
      <ChooseFactory
        factories={factories}
        handleOptionChange={handleOptionChange}
        option={option}
      />
    </div>
  );
};
