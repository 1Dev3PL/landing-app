import styles from "./styles.module.scss";
import logo from "shared/assets/images/logo.svg";
import pnkLogo from "shared/assets/images/pnkLogo.svg";
import phone from "shared/assets/icons/phone.svg";
import mail from "shared/assets/icons/mail.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upper_container}>
          <div className={styles.footer_column}>
            <div className={styles.logo_container}>
              <img src={logo} alt={"logo"} />
            </div>
            <div className={styles.requisites_container}>
              <div className={styles.requisites_items}>
                <div>ИНН</div>
                <div>КПП</div>
                <div>ОГРН</div>
                <div>Окпо</div>
              </div>
              <div className={styles.requisites_items}>
                <div>7805813844</div>
                <div>780501001</div>
                <div>1247800023272</div>
                <div>87850454</div>
              </div>
            </div>
          </div>

          <div className={styles.footer_column}>
            <div className={styles.navigation_container}>
              <Link to={"/production"} className={styles.link}>
                Продукция
              </Link>
              <Link to={"/delivery"} className={styles.link}>
                Доставка и оплата
              </Link>
              <Link to={"/contacts"} className={styles.link}>
                Контакты
              </Link>
              <Link to={"/about"} className={styles.link}>
                О компании
              </Link>
            </div>
          </div>

          <div className={styles.footer_column}>
            <div className={styles.contacts_conditions_container}>
              <div className={styles.contacts_container}>
                <div className={styles.contact_item}>
                  <div className={styles.icon_container}>
                    <img src={phone} alt={"phone"} />
                  </div>
                  <div>+7 (921) 592-02-81</div>
                </div>
                <div className={styles.contact_item}>
                  <div className={styles.icon_container}>
                    <img src={mail} alt={"email"} />
                  </div>
                  <div>clientinfo@petraterra.ru</div>
                </div>
              </div>
              <div className={styles.conditions_container}>
                <div>Условия оплаты</div>
                <div>Условия заказа доставки груза</div>
              </div>
            </div>
          </div>

          <div className={styles.footer_column}>
            <img src={pnkLogo} alt={"pnkLogo"} />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_container_item}>
            © ООО «ПЕТРАТЕРРА»
          </div>
          <div className={styles.bottom_container_item}>
            Политика конфиденциальности
          </div>
          <div className={styles.bottom_container_item}>Разработка сайта</div>
        </div>
      </div>
    </div>
  );
};
