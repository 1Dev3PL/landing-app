import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import partner1 from "shared/assets/images/partner1.svg";
import partner2 from "shared/assets/images/partner2.svg";
import partner3 from "shared/assets/images/partner3.svg";
import partner4 from "shared/assets/images/partner4.svg";
import partner5 from "shared/assets/images/partner5.svg";

export const Partners = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Наши партнёры" color="gray" />
      <div className={styles.container_inner}>
        <img src={partner1} alt="partner_logo" className={styles.logo} />
        <img src={partner2} alt="partner_logo" className={styles.logo} />
        <img src={partner3} alt="partner_logo" className={styles.logo} />
        <img src={partner4} alt="partner_logo" className={styles.logo} />
        <img src={partner5} alt="partner_logo" className={styles.logo} />
        <img src={partner1} alt="partner_logo" className={styles.logo} />
        <img src={partner2} alt="partner_logo" className={styles.logo} />
        <img src={partner3} alt="partner_logo" className={styles.logo} />
        <img src={partner4} alt="partner_logo" className={styles.logo} />
        <img src={partner5} alt="partner_logo" className={styles.logo} />
      </div>
    </div>
  );
};
