import { memo, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Texts } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getRouteArticle_create } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [t] = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.navbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.navbar, {}, [className])}>
                        <div className={cls.flex}>
                            <Texts
                                theme="inverted"
                                className={cls.AppName}
                                title={t('Blog')}
                            />
                            <AppLink
                                theme="secondary"
                                to={getRouteArticle_create()}
                                className={cls.createBtn}
                            >
                                {t('Создать статью')}
                            </AppLink>
                        </div>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );

        // (
        //   <header className={classNames(cls.navbar, {}, [className])}>
        //     <div className={cls.flex}>
        //       <Texts theme="inverted" className={cls.AppName} title={t('Blog')} />
        //       <AppLink
        //         theme="secondary"
        //         to={getRouteArticle_create()}
        //         className={cls.createBtn}
        //       >
        //         {t('Создать статью')}
        //       </AppLink>
        //     </div>
        //     <HStack gap="16" className={cls.actions}>
        //       <NotificationButton />
        //       <AvatarDropdown />
        //     </HStack>
        //   </header>
        // );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Texts className={cls.AppName} title={t('Blog')} />

            <Button theme="clearInvert" onClick={onOpenModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
