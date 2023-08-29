import React, { memo, type ButtonHTMLAttributes } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'clear' | 'outline';
    square?: boolean;
    size?: 'l' | 'm' | 'xl';
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
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
            {children}
        </button>
    );
});
