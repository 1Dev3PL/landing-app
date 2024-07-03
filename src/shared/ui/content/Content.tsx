import { ReactNode } from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';

type TContentProps = {
    children: ReactNode;
}

export const Content = (props: TContentProps) => {
    const {children} = props;
    
    return (
        <div className={ classNames(styles.container)}>
            <div className={ classNames(styles.inner_container)}>
                {children}
            </div>
        </div>
    );
}

