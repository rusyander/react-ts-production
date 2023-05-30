import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReduserList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ProfileReducer } from 'entities/Profile';
const redusers: ReduserList = {
  profile: ProfileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt>
      <div>{t('profilePage')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
