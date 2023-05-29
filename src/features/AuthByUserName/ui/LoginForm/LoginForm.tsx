import { useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Texts } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import {
  LoginActions,
  LoginReducer,
} from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReduserList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';

export interface LoginFormProps {
  className?: string;
}

const initialRedusers: ReduserList = {
  loginForm: LoginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch: any = useDispatch();

  const { t } = useTranslation();
  // const { isLoading, password, username, error } = useSelector(getLoginForm);

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialRedusers} removeAfterUnmaunt>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
