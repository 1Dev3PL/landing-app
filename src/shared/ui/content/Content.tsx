import { ReactNode } from 'react';
import styles from './styles.module.scss'

type TContentProps = {
    children: ReactNode;
}

export const Content = (props: TContentProps) => {
    const {children} = props;
    
    return (
        <div className={ styles.container }>
            <div className={ styles.inner_container }>
                {children}
            </div>
        </div>
    );
}

