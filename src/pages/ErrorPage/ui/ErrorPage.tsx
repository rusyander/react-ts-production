import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
          {t('Страница не найдена')}
      </div>
  )
}
