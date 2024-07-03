import styles from "./styles.module.scss"
import { ReactNode } from 'react';

type TPanelProps = {
    children: ReactNode;
}

export const Panel = ({children}: TPanelProps) => {
    return (
        <div className={ styles.panel }>
            {children}
        </div>
    );
}

