import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Texts } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useParams } from 'react-router-dom';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ProfileActions } from '../../model/slice/profileSlice';

interface EditableProfileCartHeaderProps {
  className?: string;
}

export const EditableProfileCartHeader = ({
  className,
}: EditableProfileCartHeaderProps) => {
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

  const onSave = () => {
    if (id) {
      dispatch(updateProfileData());
    }
  };

  return (
    <HStack
      max
      justify="between"
      className={classNames('max', {}, [className])}
    >
      <Texts title={t('Профиль')} />
      {readonly && authData?.id === profileData?.id ? (
        <Button
          onClick={hasEdit}
          theme="outline"
          data-testid={'EditableProfileCartHeader.EditButton'}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          {authData?.id === profileData?.id && (
            <HStack gap="8">
              <Button
                onClick={onCancelEdit}
                theme="outline_red"
                data-testid={'EditableProfileCartHeader.CancelButton'}
              >
                {t('Отменить')}
              </Button>
              <Button
                onClick={onSave}
                theme="outline"
                data-testid={'EditableProfileCartHeader.SaveButton'}
              >
                {t('Сохранить')}
              </Button>{' '}
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
