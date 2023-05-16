import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainImage from 'shared/assets/icons/Main.svg';
import AboutImage from 'shared/assets/icons/About.svg';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [t] = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  function onToggle(): void {
    setCollapsed((prev) => !prev);
  }
  return (
    <div
      data-testid="Sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebat-toggle"
        onClick={onToggle}
        className={cls.colapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square={true}
        size={SizeButton.M}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainImage className={cls.icon} />
            <span className={cls.link}>{t('Главная cтраница')}</span>
          </AppLink>
        </div>

        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutImage className={cls.icon} />
            <span className={cls.link}>{t('О сайте')}</span>
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} className={cls.language} />
      </div>
    </div>
  );
};
