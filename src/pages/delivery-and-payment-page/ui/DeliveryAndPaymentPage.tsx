import styles from "./styles.module.scss";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Content } from "shared/ui/content/Content.tsx";
import { DeliveryAndPayment } from "widgets/delivery-and-payment";
import { Panel } from "shared/ui/panel/Panel.tsx";
import truckIcon from "shared/assets/icons/truck.svg";
import pickupFromFactory from "shared/assets/images/pickupFromFactory.png";
import { Factories } from "widgets/factories";
import { factories, office } from "shared/db/db.ts";
import { Requisites } from "widgets/requisites";
import { FAQ } from "widgets/faq";
import { Contacts } from "widgets/contacts";
import { Feedback } from "widgets/feedback";

export function DeliveryAndPaymentPage() {
  return (
    <div>
      <Content>
        <DeliveryAndPayment />
        <div className={styles.container}>
          <Panel className={styles.panel}>
            <div className={styles.header}>
              <div>
                <img src={truckIcon} alt="truckIcon" className={styles.icon} />
              </div>
              <div className={styles.header_text}>Самовывоз с завода</div>
            </div>
            <div className={styles.main_text}>
              {
                "На заводе организована удобная площадка для погрузки всех видов нерудных материалов:\nподходит для любого вида транспорта. Площадка работает всесезонно"
              }
            </div>
          </Panel>
          <Panel>
            <img
              src={pickupFromFactory}
              alt="pickupFromFactory"
              className={styles.image}
            />
          </Panel>
        </div>
        <Factories factories={factories} />
        <Requisites />
        <FAQ />
        <Contacts office={office} />
        <Feedback />
      </Content>
    </div>
  );
}
