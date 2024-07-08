import { BlockHeader } from 'shared/ui/block-header/BlockHeader';
import styles from './styles.module.scss'
import { Button } from 'shared/ui/button/Button';
import video from 'shared/assets/videos/Deftones.mp4'
import image_video from 'shared/assets/images/video.png'
import image1 from 'shared/assets/images/about_1.png'
import image2 from 'shared/assets/images/about_2.png'
import info from 'shared/assets/icons/info.svg'
import { Panel } from 'shared/ui/panel/Panel';

export const About = () => {
    
    return(
        <div className={ styles.container }>
            <BlockHeader title="О компании «Петратерра»"  color="ultramarine">
                <Button color="light_gray">
                    {"Подробнее о компании"}
                </Button>
            </BlockHeader>
            
            <div className={ styles.container_images }>
                <img src={ image1 } alt="about_image1" className={ styles.image }/>
                {/* <video autoPlay muted loop src={ video } className={ styles.video } /> */}
                <img src={ image_video } alt="about_video" className={ styles.video }/>
                <img src={ image2 } alt="about_image2" className={ styles.image }/>
            </div>
            <div className={ styles.container_lower }>
                <Panel className={ styles.text_about }>
                    <span className={ styles.petraterra_text }>Петратерра </span> 
                    занимается поставкой щебня и производных продуктов для дорожного, нефтегазового, промышленного и гражданского строительства
                </Panel>
                <Panel className={ styles.gov_requirements }>
                    <img src={ info } alt="info_icon" className={ styles.icon_info } />
                    <div className={ styles.text_info }>
                        Реализуемая продукция соответствует государственным требованиям и стандартам
                    </div>
                </Panel>
            </div>
        </div>
    );
}