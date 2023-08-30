import React, { memo, type ButtonHTMLAttributes } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'clear' | 'outline' | 'filled';
    square?: boolean;
    size?: 'l' | 'm' | 'xl';
    disabled?: boolean;
    children: React.ReactNode;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
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
            ])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
