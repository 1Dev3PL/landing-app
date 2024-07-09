import styles from "./styles.module.scss";
import { TPlacemark } from "shared/db/db.ts";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

type TMapProps = {
  placemarks: TPlacemark[];
  centerCoords: number[];
  zoom: number;
};

export const OurMap = (props: TMapProps) => {
  const { placemarks, centerCoords, zoom } = props;

  const handlePlacemarkClick = () => {
    console.log("something");
  };

  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          className={styles.map}
          width={"100%"}
          height={273}
          defaultState={{
            center: centerCoords,
            zoom: zoom,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {placemarks.map((placemark) => (
            <Placemark
              key={placemark.id}
              geometry={[placemark.latitude, placemark.longitude]}
              modules={["geoObject.addon.balloon"]}
              onCLick={handlePlacemarkClick}
              properties={{
                balloonContentBody: `${placemark.description}`,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
