import React, {
    type ButtonHTMLAttributes,
    forwardRef,
    ForwardedRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'clear' | 'outline' | 'filled';
    color?: 'normal' | 'success' | 'error';

    square?: boolean;
    size?: 'l' | 'm' | 'xl';
    disabled?: boolean;
    children: React.ReactNode;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            color = 'normal',
            square,
            size = 'm',
            disabled,
            addonLeft,
            addonRight,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
        };

        return (
            <button
                type="button"
                {...otherProps}
                disabled={disabled}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
