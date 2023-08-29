import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { Dropdown as DropdownOld } from '@/shared/ui/Popups';
import { Avatar as AvatarOld } from '@/shared/ui/Avatar/ui/Avatar';
import { useSelector } from 'react-redux';
import {
    UserActions,
    getUserAuthData,
    isUserAdmin,
    isUserManager,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin_panel, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

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

    const items = [
        {
            content: t('Профиль пользователя'),
            href: getRouteProfile(authData?.id ?? ''),
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
    ];

    if (!authData) return null;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    direction="bottom left"
                    className={classNames(cls.dropdown, {}, [className])}
                    items={items}
                    trigger={
                        <Avatar
                            fallbackInverted
                            size={40}
                            src={authData.avatar}
                        />
                    }
                />
            }
            off={
                <DropdownOld
                    direction="bottom left"
                    className={classNames(cls.dropdown, {}, [className])}
                    items={items}
                    trigger={
                        <AvatarOld
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            }
        />
    );

    // (
    //     <Dropdown
    //         direction="bottom left"
    //         className={classNames(cls.dropdown, {}, [className])}
    //         items={items}
    //         trigger={
    //             <Avatar fallbackInverted size={30} src={authData.avatar} />
    //         }
    //     />
    // );
});
