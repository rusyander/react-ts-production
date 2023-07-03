import { memo, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, getUserAuthData } from 'entities/User';
import { Texts } from 'shared/ui/Text';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [t] = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.flex}>
          <Texts theme="inverted" className={cls.AppName} title={t('Blog')} />
          <AppLink
            theme="secondary"
            to={RoutePath.article_create}
            className={cls.createBtn}
          >
            {t('Создать статью')}
          </AppLink>
        </div>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
            {
              content: t('Профиль пользователя'),
              href: RoutePath.profile + authData.id,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
        {/* <Button theme="clearInvert" onClick={onLogout}>
          {t('Выйти')}
        </Button> */}
      </header>
    );
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
