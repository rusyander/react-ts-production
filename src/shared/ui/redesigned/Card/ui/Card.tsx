import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardPadding = '0' | '8' | '16' | '24';

const paddingMap: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: 'normal' | 'outlined' | 'light';
    max?: boolean;
    padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        ...otherProps
    } = props;

    const paddingsClass = paddingMap[padding];

    return (
        <div
            {...otherProps}
            className={classNames(
                cls.card,
                { [cls.max]: max, [cls.padding]: padding },
                [className, cls[variant], cls[paddingsClass]],
            )}
        >
            {children}
        </div>
    );
});
