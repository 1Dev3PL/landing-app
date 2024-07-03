import { ReactNode } from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';

type TContentProps = {
    children: ReactNode;
    className?: string;
    classNameChild?: string;

}

export const Content = (props: TContentProps) => {
    const {children, className, classNameChild} = props;
    
    return (
        <div className={ classNames(styles.container , className)}>
            <div className={ classNames(styles.inner_container, classNameChild)}>
                {children}
            </div>
        </div>
    );
}

