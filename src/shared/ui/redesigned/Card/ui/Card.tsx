import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'medium';

const paddingMap: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

const cardBorderMap: Record<CardBorder, string> = {
    round: 'card_round',
    normal: 'card_normal',
    medium: 'card_medium',
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: 'normal' | 'outlined' | 'light';
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    fullHeight?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normal',
        fullHeight = false,
        ...otherProps
    } = props;

    const paddingsClass = paddingMap[padding];
    const cardBorderClass = cardBorderMap[border];

    return (
        <div
            {...otherProps}
            className={classNames(
                cls.card,
                {
                    [cls.max]: max,
                    [cls.padding]: padding,
                    [cls.fullHeight]: fullHeight,
                },
                [
                    className,
                    cls[variant],
                    cls[paddingsClass],
                    cls[cardBorderClass],
                ],
            )}
        >
            {children}
        </div>
    );
});
