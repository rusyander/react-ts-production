import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Texts } from 'shared/ui/Text';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ProfileActions, ProfileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCartHeader } from '../EditableProfileCartHeader/EditableProfileCartHeader';
import { VStack } from 'shared/ui/Stack';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const redusers: ReducersList = {
  profile: ProfileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

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
    <DynamicModuleLoader reducers={redusers}>
      <VStack
        max
        gap="16"
        className={classNames(cls.EditableProfileCard, {}, [className])}
      >
        <EditableProfileCartHeader />
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
      </VStack>
    </DynamicModuleLoader>
  );
});
