import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import aboutCompany from "shared/assets/images/aboutCompany.png";
import infoIcon from "shared/assets/icons/info.svg";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Content } from "shared/ui/content/Content.tsx";
import { Partners } from "widgets/partners";
import { Reviews } from "widgets/reviews";
import { factories, office, reviews } from "shared/db/db.ts";
import { FAQ } from "widgets/faq";
import { Contacts } from "widgets/contacts";
import { Factories } from "widgets/factories";
import { Feedback } from "widgets/feedback";

export function AboutCompanyPage() {
  return (
    <div>
      <Header />
      <Content>
      <div className={styles.container}>
        <BlockHeader title="О компании «Петратерра»" color="ultramarine" />
        <div className={styles.container_inner}>
          <Panel className={styles.container_left}>
            <img
              src={aboutCompany}
              alt="aboutCompany"
              className={styles.image}
            ></img>
          </Panel>
          <div className={styles.container_right}>
            <Panel className={styles.container_upper}>
              <span className={styles.petraterra_text}>Петратерра </span>
              занимается поставкой щебня и производных продуктов для дорожного,
              нефтегазового, промышленного и гражданского строительства
            </Panel>
            <Panel className={styles.container_lower}>
              <img src={infoIcon} alt="infoIcon" />
              Реализуемая продукция соответствует государственным требованиям и стандартам
            </Panel>
          </div>
        </div>
      </div>
        <Partners />
        <Reviews items={reviews} />
        <FAQ />
        <Contacts office={office} />
        <Factories factories={factories} />
        <Feedback />
      </Content>
      <Footer />
    </div>
  );
}
