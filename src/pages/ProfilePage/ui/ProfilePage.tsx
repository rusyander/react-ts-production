import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReduserList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { type } from 'os';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
const redusers: ReduserList = {
  profile: ProfileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
      <div>
        <ProfilePageHeader />
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
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
