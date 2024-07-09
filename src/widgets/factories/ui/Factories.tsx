import styles from "./styles.module.scss"
import { OurMap } from "shared/ui/our-map/OurMap.tsx";
import { TPlacemark } from "shared/db/db.ts";

type TFactoriesProps = {
  factories: TPlacemark[];
}

export const Factories = (props: TFactoriesProps) => {
  const {factories} = props;

  return(
    <div className={styles.container}>
      <OurMap placemarks={factories} centerCoords={[60.584634, 29.061951]} zoom={9}/>
    </div>
  );
}