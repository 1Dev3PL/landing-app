import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Button } from "shared/ui/button/Button.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { TReview } from "shared/db/db.ts";
import { useRef } from "react";
import arrowLeft from "shared/assets/icons/arrow-left.svg";
import arrowRight from "shared/assets/icons/arrow-right.svg";

type TReviewsProps = {
  items: TReview[];
};

export const Reviews = (props: TReviewsProps) => {
  const { items } = props;

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 400;
    }
  };

  const handleScrollRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className={styles.container}>
      <BlockHeader title={"Отзывы и благодарности"} color={"ultramarine"}>
        <div className={styles.buttons_container}>
          <Button
            iconSrc={arrowLeft}
            color={"light_gray"}
            onClick={() => handleScrollLeftClick()}
            className={styles.button}
          />
          <Button
            iconSrc={arrowRight}
            color={"light_gray"}
            onClick={() => handleScrollRightClick()}
            className={styles.button}
          />
        </div>
      </BlockHeader>
      <div className={styles.reviews_slider} ref={carouselRef}>
        {items.map((item) => {
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
