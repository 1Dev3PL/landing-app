import styles from './styles.module.scss'
import logo from '../../../shared/assets/images/logo.svg'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className={ styles.main_container }>
            <div className="logo">
                <img src={ logo } alt="petraterra_logo" className="logo" />
            </div>
            <div className={ styles.navigation }>
                <Link to='' className={ styles.nav_link }>Продукция</Link>
                <Link to='' className={ styles.nav_link }>О компании</Link>
                <Link to='' className={ styles.nav_link }>Контакты</Link>
                <Link to='' className={ styles.nav_link }>Контакты</Link>
            </div>
            <div className={ styles.phone_number_container }>
                <p className= { styles.phone_number }>+7 (921) 592-02-81</p>
            </div>
        </div>
    )
}
