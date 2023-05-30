import React, { memo, type FC } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

export default AppLink;

// className={({ isActive }) =>
// classNames(styles.link, { [styles.active]: isActive }, [
// className,
// styles[variant],
// ])
// }
