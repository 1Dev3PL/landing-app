import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { TPartner } from "shared/db/db.ts";

type TPartnersProps = {
  items: TPartner[];
};

export const Partners = (props: TPartnersProps) => {
  const { items } = props;

  return (
    <div className={styles.container}>
      <BlockHeader title="Наши партнёры" color="gray" />
      <div className={styles.container_inner}>
        {items.map((p, idx) => (
          <img key={idx} src={p.logo} alt="partner_logo" className={styles.logo} />
        ))}
      </div>
    </div>
  );
};
