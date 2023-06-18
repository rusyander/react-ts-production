import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

import { useTranslation } from 'react-i18next';
import { Texts } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button/Button';
import {
  ProfileActions,
  getProfileData,
  getProfileReadonly,
  updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { useParams } from 'react-router-dom';
interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const { id } = useParams<{ id: string }>();

  const hasEdit = useCallback(() => {
    dispatch(ProfileActions.setReadonly(false));
  }, [dispatch]);

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const onCancelEdit = useCallback(() => {
    dispatch(ProfileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (id) {
      dispatch(updateProfileData());
    }
  }, [dispatch, id]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Texts title={t('Профиль')} />
      {readonly && authData?.id === profileData?.id ? (
        <Button onClick={hasEdit} className={cls.editBtn} theme="outline">
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          {authData?.id === profileData?.id && (
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
              </Button>{' '}
            </>
          )}
        </>
      )}
    </div>
  );
};
