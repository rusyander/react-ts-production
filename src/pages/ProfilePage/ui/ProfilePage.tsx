import { FC, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Texts } from 'shared/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
const redusers: ReducersList = {
  profile: ProfileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { id } = useParams<{ id: string }>();

  const validateErrorYranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORECT_AGE]: t('Некоректный возраст'),
    [ValidateProfileError.INCORECT_COUNTRY]: t('Некоректный регион'),
    [ValidateProfileError.INCORECT_USER_DATA]: t(
      'Имя и фамилия обязательны к заполнению'
    ),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  };

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const validationOnNumber = /^[0-9\b]+$/;
      if (value === '' || validationOnNumber.test(value || '')) {
        dispatch(ProfileActions.updateProfile({ age: Number(value || '') }));
      }
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(ProfileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(ProfileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt>
      <Page>
        <div>
          <ProfilePageHeader />
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Texts
                key={error}
                text={validateErrorYranslates[error]}
                theme="error"
              />
            ))}
          <ProfileCard
            data={formData}
            error={error}
            isLoading={isLoading}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            readonly={readonly}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeUsername={onChangeUsername}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
