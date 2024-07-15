import styles from "./styles.module.scss";
import logo from "../../../shared/assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.nav_container}>
          <Link to="/production" className={styles.nav_link}>
            Продукция
          </Link>
          <Link to="/delivery" className={styles.nav_link}>
            Доставка и оплата
          </Link>
          <Link to="/about" className={styles.nav_link}>
            О компании
          </Link>
          <Link to="/contacts" className={styles.nav_link}>
            Контакты
          </Link>
        </div>
        <div className={styles.phone_number}>+7 (921) 592-02-81</div>
      </div>
    </div>
  );
};
