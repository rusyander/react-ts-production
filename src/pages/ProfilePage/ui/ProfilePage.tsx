import React, { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReduserList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
const redusers: ReduserList = {
  profile: ProfileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmaunt>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
