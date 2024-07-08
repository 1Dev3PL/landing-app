import { Panel } from 'shared/ui/panel/Panel';
import styles from './styles.module.scss'
import logo from 'shared/assets/images/pnkLogo.svg'
import hammer from 'shared/assets/icons/hammer.svg'
import marker from 'shared/assets/icons/marker.svg'
import crane from 'shared/assets/icons/crane.svg'
import building from 'shared/assets/icons/building.svg'
import video from 'shared/assets/videos/Deftones.mp4'
import { Button } from 'shared/ui/button/Button';

export const MainPageHeading = () => {

    return (
        <div className={styles.container}>
            <div className={styles.upper_container}>
                <Panel className={styles.left_column}>
                    <h1 className={styles.header}>Нерудные материалы</h1>
                    <div className={styles.text_with_logo}>
                        <div className={styles.text}>Петратерра — аккредитованный дистрибьютор ПНК</div>
                        <img src={logo} alt="pnk_logo"/>
                    </div>
                    <div className={styles.buttons_container}>
                        <Button color="ultramarine">Каталог продукции</Button>
                        <Button color="gray">Оставить заявку</Button>
                    </div>
                </Panel>
                <Panel className={styles.right_column}>
                    <video autoPlay muted loop src={video} className={styles.video}/>
                </Panel>
            </div>
            <div className={styles.lower_container}>
                <Panel className={styles.small_panel}>
                    <img src={hammer} alt="hammer" className={styles.icon}/>
                    <div className={styles.text}>
                        Работаем напрямую с производителем материалов
                    </div>
                </Panel>
                <Panel className={styles.small_panel}>
                    <img src={marker} alt="marker" className={styles.icon}/>
                    <div className={styles.text}>
                        Карьер завода находится в Выборгском районе ЛО
                    </div>
                </Panel>
                <Panel className={styles.small_panel}>
                    <img src={crane} alt="crane" className={styles.icon}/>
                    <div className={styles.text}>
                        Удобная площадка для погрузки
                    </div>
                </Panel>
                <Panel className={styles.small_panel}>
                    <img src={building} alt="building" className={styles.icon}/>
                    <div className={styles.text}>
                        Материалы всегда в наличие на нашем складе
                    </div>
                </Panel>
            </div>
            <img src={logo} alt="pnk_logo" />
          </div>
          <div className={styles.buttons_container}>
            <Button title="Каталог продукции" color="ultramarine" />
            <Button
              title="Оставить заявку"
              color="gray"
              className={styles.right_button}
            />
          </div>
        </Panel>
        <Panel className={styles.right_column}>
          <video autoPlay muted loop src={video} className={styles.video} />
        </Panel>
      </div>
      <div className={styles.lower_container}>
        <Panel className={styles.small_panel}>
          <img src={hammer} alt="hammer" className={styles.icon} />
          <div className={styles.text}>
            Работаем напрямую с производителем материалов
          </div>
        </Panel>
        <Panel className={styles.small_panel}>
          <img src={marker} alt="marker" className={styles.icon} />
          <div className={styles.text}>
            Карьер завода находится в Выборгском районе ЛО
          </div>
        </Panel>
        <Panel className={styles.small_panel}>
          <img src={crane} alt="crane" className={styles.icon} />
          <div className={styles.text}>Удобная площадка для погрузки</div>
        </Panel>
        <Panel className={styles.small_panel}>
          <img src={building} alt="building" className={styles.icon} />
          <div className={styles.text}>
            Материалы всегда в наличие на нашем складе
          </div>
        </Panel>
      </div>
    </div>
  );
};
