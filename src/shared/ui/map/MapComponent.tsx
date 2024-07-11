import styles from "./styles.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

type TPlacemark = {
  id: number;
  latitude: number;
  longitude: number;
  description: string;
};

type TMapProps = {
  placemarks: TPlacemark[];
  centerCoords: number[];
  zoom: number;
  handleOnPlacemarkClick: (id: number) => void;
};

export const MapComponent = (props: TMapProps) => {
  const { placemarks, centerCoords, zoom, handleOnPlacemarkClick } = props;
  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          className={styles.map}
          width={"100%"}
          height={273}
          state={{
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
              onClick={() => handleOnPlacemarkClick(placemark.id)}
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
