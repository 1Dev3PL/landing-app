import styles from "./styles.module.scss"
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";

export const Requisites = () => {
  return(
    <div className={styles.container}>
      <BlockHeader title="Работаем по безналичному расчету с предоплатой" color="gray" />
      <Panel className={styles.container_inner}>
        <div className={styles.header}>Реквизиты для безналичной оплаты</div>
        <div className={styles.content}>
          <div className={styles.container_left}>
            <div className={styles.items}>
              <div>ИНН</div>
              <div>КПП</div>
              <div>ОГРН</div>
              <div>Окпо</div>
            </div>
            <div className={styles.items}>
              <div>7805813844</div>
              <div>780501001</div>
              <div>1247800023272</div>
              <div>87850454</div>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.items}>
              <div>Расч. счет</div>
              <div className={styles.bank}>Банк</div>
              <div>БИК</div>
              <div>Корр. счет</div>
            </div>
            <div className={styles.items}>
              <div>40702810232000016755</div>
              <div className={styles.bank}>{"ФИЛИАЛ «САНКТ-ПЕТЕРБУРГСКИЙ»\nАО «АЛЬФА-БАНК»"}</div>
              <div>044030786</div>
              <div>30101810600000000786</div>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}