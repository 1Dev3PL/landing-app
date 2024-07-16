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
  handlePlacemarkClick?: (id: number) => void;
};

export const MapComponent = (props: TMapProps) => {
  const { placemarks, centerCoords, zoom, handlePlacemarkClick } = props;
  return (
    <div>
      <YMaps>
        <Map
          width={"100%"}
          height={273}
          state={{
            center: centerCoords,
            zoom: zoom,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          options={{ autoFitToViewport: "always" }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {placemarks.map((placemark) => (
            <Placemark
              key={placemark.id}
              geometry={[placemark.latitude, placemark.longitude]}
              modules={["geoObject.addon.balloon"]}
              onClick={() =>
                handlePlacemarkClick && handlePlacemarkClick(placemark.id)
              }
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
