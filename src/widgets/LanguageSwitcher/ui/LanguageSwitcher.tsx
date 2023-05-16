import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  className,
  short,
}) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Короткий Язык' : 'Язык')}
    </Button>
  );
};
