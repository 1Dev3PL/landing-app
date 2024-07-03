import { ReactNode } from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';

type TContentProps = {
    children: ReactNode;
    className?: string;
}

export const Content = ({children, className}: TContentProps) => {
    return (
        <div className={ classNames(styles.panel , className)}>
            {children}
        </div>
    );
}

