import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

import { useTranslation } from 'react-i18next';
import { Texts } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button/Button';
import {
  ProfileActions,
  getProfileReadonly,
  updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);

  const hasEdit = useCallback(() => {
    dispatch(ProfileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(ProfileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Texts title={t('Профиль')} />
      {readonly ? (
        <Button onClick={hasEdit} className={cls.editBtn} theme="outline">
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            onClick={onCancelEdit}
            className={cls.editBtn}
            theme="outline_red"
          >
            {t('Отменить')}
          </Button>

          <Button onClick={onSave} className={cls.saveBtn} theme="outline">
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
