import { BlockHeader } from 'shared/ui/block-header/BlockHeader';
import styles from './styles.module.scss'
import { Button } from 'shared/ui/button/Button';

export const About = () => {
    
    return(
        <div className={ styles.container }>
            <BlockHeader title="О компании «Петратерра»"  color="ultramarine">
                <Button title="Подробнее о компании" color="gray" />
            </BlockHeader>
            
            <div className={ styles.container_images }>
                <img src="" alt="about_image" className={ styles.image }/>
                <video autoPlay muted loop src={ video } className={ styles.video } />
                <img src="" alt="about_image" className={ styles.image }/>
            </div>
        </div>
    );
}