import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useTranslation } from 'react-i18next';
import { Texts } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCountry?: (country: Country | any) => void;
  onChangeCurrency?: (currency: Currency | any) => void;

  readonly?: boolean;
}

export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeLastName,
  onChangeFirstName,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Texts
          align="center"
          theme="error"
          title={t('Произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />

        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastName}
          readonly={readonly}
        />

        <Input
          className={cls.input}
          value={data?.age}
          type="number"
          placeholder={t('Ваша возраст')}
          onChange={onChangeAge}
          readonly={readonly}
        />

        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readonly={readonly}
        />

        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Ваш никнейм')}
          onChange={onChangeUsername}
          readonly={readonly}
        />

        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Ваша аватарка')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />

        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />

        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
