import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [t] = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERT} onClick={onOpenModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
}
