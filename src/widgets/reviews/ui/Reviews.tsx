import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { TReview } from "shared/db/db.ts";
import { useState } from "react";

type TReviewsProps = {
  items: TReview[];
};

export const Reviews = (props: TReviewsProps) => {
  const { items } = props;

  const [showedIndexes, setShowedIndexes] = useState<[number, number]>([0, 3]);
  const [viewedItems, setViewedItems] = useState<TReview[]>(items.slice(0, 4));

  const handleGoLeft = () => {
    if (showedIndexes[0] > 0) {
      setShowedIndexes([showedIndexes[0] - 1, showedIndexes[1] - 1]);
    }
  };

  const handleGoRight = () => {
    if (showedIndexes[1] < items.length - 1) {
      setShowedIndexes([showedIndexes[0] + 1, showedIndexes[1] + 1]);
    }
  };

  return (
    <div className={styles.container}>
      <BlockHeader title={"Отзывы и благодарности"} color={"ultramarine"}>
        <div className={styles.buttons_container}>
          <Button color={"light_gray"} onClick={() => handleGoLeft()}>
            left
          </Button>
          <Button color={"light_gray"} onClick={() => handleGoRight()}>
            right
          </Button>
        </div>
      </BlockHeader>
      <div className={styles.reviews_slider}>
        {items.slice(showedIndexes[0], showedIndexes[1] + 1).map((item) => {
          return (
            <Panel key={item.id} className={styles.review_item}>
              <div className={styles.review_item_upper_container}>
                <div>
                  <img
                    className={styles.review_logo}
                    src={item.logo}
                    alt={"companyLogo"}
                  />
                </div>
                <div
                  className={styles.review_text}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
              <div className={styles.review_companyName}>
                {item.companyName}
              </div>
            </Panel>
          );
        })}
      </div>
    </div>
  );
};
