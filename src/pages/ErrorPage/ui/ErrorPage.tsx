import React, { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Page>
      {' '}
      <div
        data-testid={'ErrorPage'}
        className={classNames(cls.ErrorPage, {}, [className])}
      >
        {t('Страница не найдена')}
      </div>
    </Page>
  );
};
