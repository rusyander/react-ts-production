import React, { memo, type FC } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: 'primary' | 'secondary' | 'red';
  children: React.ReactNode;
  target?: string;
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = 'primary',
    target,
    ...otherProps
  } = props;
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      target={target}
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
