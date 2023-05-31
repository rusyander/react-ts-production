import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { Texts } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Texts title={t('Профиль')} />
        <Button className={cls.editBtn} theme="outline">
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
        />

        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};
