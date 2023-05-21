import { useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions } from 'features/AuthByUserName';
import { getLoginForm } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Texts } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const { isLoading, password, username, error } = useSelector(getLoginForm);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(LoginActions.setUserName(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Texts title={t('Форма авторизации')} />
      {error && (
        <Texts
          theme={TextTheme.ERROR}
          text={t('Вы ввели неправельные данные')}
        />
      )}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        autoFocus
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
