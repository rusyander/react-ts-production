import React, { forwardRef, ForwardedRef } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavLink, type LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: 'primary' | 'red';
    children: React.ReactNode;
    target?: string;
    activeClassName?: string;
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            className,
            children,
            to,
            variant = 'primary',
            target,
            activeClassName = '',
            ...otherProps
        } = props;
        return (
            // <Link
            //     className={classNames(cls.AppLink, {}, [
            //         className,
            //         cls[variant],
            //     ])}
            //     to={to}
            //     {...otherProps}
            // >
            //     {children}
            // </Link>
            <NavLink
                className={({ isActive }) =>
                    classNames(cls.AppLink, { [activeClassName]: isActive }, [
                        className,
                        cls[variant],
                    ])
                }
                to={to}
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    },
);
// className={classNames(cls.AppLink, {}, [
//     className,
//     cls[variant],
// ])}
