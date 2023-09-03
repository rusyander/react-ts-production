import { useCallback, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { Input as InputOld } from '@/shared/ui/Input/ui/Input';
import { useSelector } from 'react-redux';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { LoginActions, LoginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Texts } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialRedusers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(LoginActions.setUserName(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(LoginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async (): Promise<void> => {
        const res = await dispatch(loginByUserName({ username, password }));
        console.log(res);
        if (res.meta.requestStatus === 'fulfilled') {
            console.log('fulfilled');
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);
    return (
        <DynamicModuleLoader reducers={initialRedusers} removeAfterUnmaunt>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        max
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Texts title={t('Форма авторизации')} />
                        {error && (
                            <Texts
                                variant="error"
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
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onLoginClick}
                            variant="outline"
                            className={cls.loginBtn}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextsOld title={t('Форма авторизации')} />
                        {error && (
                            <TextsOld
                                theme="error"
                                text={t('Вы ввели неправельные данные')}
                            />
                        )}
                        <InputOld
                            type="text"
                            className={cls.input}
                            placeholder={t('Введите username')}
                            autoFocus
                            onChange={onChangeUserName}
                            value={username}
                        />
                        <InputOld
                            type="text"
                            className={cls.input}
                            placeholder={t('Введите пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonOld
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onLoginClick}
                            theme="outline"
                            className={cls.loginBtn}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonOld>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
