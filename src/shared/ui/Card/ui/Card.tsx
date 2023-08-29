import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: 'normal' | 'outlined';
    max?: boolean;
}
/**
 * @deprecated
 */
export const Card = memo((props: CardProps) => {
    const { className, children, theme = 'normal', max, ...otherProps } = props;

    return (
        <div
            {...otherProps}
            className={classNames(cls.card, { [cls.max]: max }, [
                className,
                cls[theme],
            ])}
        >
            {children}
        </div>
    );
});
