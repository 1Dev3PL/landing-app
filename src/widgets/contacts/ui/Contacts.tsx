import styles from "./styles.module.scss";
import { TPlacemark } from "shared/db/db.ts";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import phone from "shared/assets/icons/phoneUltramarine.svg";
import mail from "shared/assets/icons/mailUltramarine.svg";
import { MapComponent } from "shared/ui/map/MapComponent.tsx";

type TContactProps = {
  office: TPlacemark[];
};

export const Contacts = (props: TContactProps) => {
  const { office } = props;

  return (
    <div className={styles.container}>
      <BlockHeader title="Контакты компании" color="gray" />
      <Panel className={styles.address}>
        <div className={styles.container_left}>
          <div className={styles.container_upper}>
            <div className={styles.header}>Юридический адрес:</div>
            <div className={styles.text}>
              198188, город Санкт-Петербург, вн. тер. г., муниципальный округ
              Автово, ул. Возрождения, д. 31, лит. А, оф. 308В
            </div>
          </div>
          <div className={styles.container_lower}>
            <div className={styles.phone}>
              <img src={phone} alt={"phoneIcon"} />
              +7 (921) 592-02-81
            </div>
            <div className={styles.mail}>
              <img src={mail} alt={"mailIcon"} />
              clientinfo@petraterra.ru
            </div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.header}>Реквизиты компании:</div>
          <div className={styles.requisites}>
            <div className={styles.requisite_items_left}>
              <div className={styles.bank}>
                <div>Расч. счет</div>
                <div>Банк</div>
              </div>
              <div>
                <div>ИНН</div>
                <div>КПП</div>
                <div>ОГРН</div>
                <div>Окпо</div>
              </div>
              <div>
                <div>БИК</div>
                <div>Корр. счет</div>
              </div>
            </div>
            <div className={styles.requisite_items_right}>
              <div>
                <div>40702810232000016755</div>
                <div>ФИЛИАЛ «САНКТ-ПЕТЕРБУРГСКИЙ» АО «АЛЬФА-БАНК»</div>
              </div>
              <div>
                <div>7805813844</div>
                <div>780501001</div>
                <div>1247800023272</div>
                <div>87850454</div>
              </div>
              <div>
                <div>044030786</div>
                <div>30101810600000000786</div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
      <MapComponent
        placemarks={office}
        centerCoords={[office[0].latitude, office[0].longitude]}
        zoom={12}
      />
    </div>
  );
};
