import { ReactNode } from 'react';
import styles from './styles.module.scss'

type TContentProps = {
    children: ReactNode;
}

export const Content = ({children}: TContentProps) => {
    return (
        <div className={ styles.container }>
            {children}
        </div>
    );
}

