import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar';
import { useSelector } from 'react-redux';
import {
  UserActions,
  getUserAuthData,
  isUserAdmin,
  isUserManager,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin_panel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  if (!authData) return null;

  return (
    <Dropdown
      direction="bottom left"
      className={classNames(cls.dropdown, {}, [className])}
      items={[
        {
          content: t('Профиль пользователя'),
          href: getRouteProfile(authData.id),
        },
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Админ панель'),
                href: getRouteAdmin_panel(),
              },
            ]
          : []),
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
