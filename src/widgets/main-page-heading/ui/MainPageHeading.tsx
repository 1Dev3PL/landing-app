import { Panel } from 'shared/ui/panel/Panel';
import styles from './styles.module.scss'
import logo from 'shared/assets/images/pnkLogo.svg'
import hammer from 'shared/assets/icons/hammer.svg'
import marker from 'shared/assets/icons/marker.svg'
import crane from 'shared/assets/icons/crane.svg'
import building from 'shared/assets/icons/building.svg'

export const MainPageHeading = () => {

    return(
        <div className={ styles.container }>
            <div className={ styles.upper_container }>
                <Panel className= { styles.column }>
                    <h1 className={ styles.header }>Нерудные материалы</h1>
                    <div className={ styles.text_with_logo }>
                        <div className={ styles.text }>Петратерра — аккредитованный дистрибьютор ПНК</div>
                        <img src={ logo } alt="pnk_logo" />
                    </div>
                    <div className={ styles.buttons_container }>
                        <button className={ styles.left_button }>Каталог продукции</button>
                        <button className={ styles.right_button }>Оставить заявку</button>
                    </div>
                </Panel>
                <div className={ styles.column }>

                </div>
            </div>
            <div className={ styles.lower_container }>
                <Panel className={ styles.small_panel }>
1                   <img src={ hammer } alt="hammer" />
                    <div className={ styles.text }>
                        Работаем напрямую с производителем материалов
                    </div>
                </Panel>
                <Panel className={ styles.small_panel }>
1                   <img src={ marker } alt="marker" />
                    <div className={ styles.text }>
                        Карьер завода находится в Выборгском районе ЛО
                    </div>
                </Panel>
                <Panel className={ styles.small_panel }>
1                   <img src={ crane } alt="crane" />
                    <div className={ styles.text }>
                        Удобная площадка для погрузки
                    </div>
                </Panel>
                <Panel className={ styles.small_panel }>
1                   <img src={ building } alt="building" />
                    <div className={ styles.text }>
                        Материалы всегда в наличие на нашем складе
                    </div>
                </Panel>
            </div>
        </div>
    );
}