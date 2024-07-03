import { ReactNode } from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';

type TContentProps = {
    children: ReactNode;
    className?: string;
}

export const Content = (props: TContentProps) => {
    const {children, className} = props;

    return (
        <div className={ classNames(styles.container, className)}>
            {children}
        </div>
    );
}

