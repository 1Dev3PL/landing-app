import styles from "./styles.module.scss";
import logo from "../../../shared/assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.nav_container}>
          <Link to="" className={styles.nav_link}>
            Продукция
          </Link>
          <Link to="" className={styles.nav_link}>
            О компании
          </Link>
          <Link to="" className={styles.nav_link}>
            Контакты
          </Link>
          <Link to="" className={styles.nav_link}>
            Контакты
          </Link>
        </div>
        <div className={styles.phone_number}>+7 (921) 592-02-81</div>
      </div>
    </div>
  );
};
