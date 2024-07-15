import styles from "./styles.module.scss";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { CatalogCard } from "shared/ui/catalog-card/CatalogCard.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import { useState } from "react";
import { TItem } from "shared/db/db.ts";

type TCatalogContainerProps = {
  items: TItem[];
};

export const CatalogGrid = (props: TCatalogContainerProps) => {
  const { items } = props;

  const [viewedItems, setViewedItems] = useState<TItem[]>(items.slice(0, 3));
  const [isShowedMore, setIsShowedMore] = useState(false);

  const handleShowMore = () => {
    setViewedItems(items);
    setIsShowedMore(true);
  };

  return (
    <Panel className={styles.catalog_grid_container}>
      <div className={styles.grid}>
        {viewedItems.map((item, idx) => (
          <CatalogCard
            key={idx}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            fractions={item.fractions}
            productGroupId={item.productGroupId}
          />
        ))}
      </div>
      {!isShowedMore && (
        <div className={styles.button_container}>
          <Button color={"ultramarine"} onClick={handleShowMore}>
            Показать ещё
          </Button>
        </div>
      )}
    </Panel>
  );
};
