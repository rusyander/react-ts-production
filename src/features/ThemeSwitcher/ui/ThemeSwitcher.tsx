import React, { memo, type FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';

import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';

import { Button } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
    ({ className }: ThemeSwitcherProps) => {
        const { toggleTheme, theme } = useTheme();
        const dispatch = useAppDispatch();
        const onToggkeHendler = useCallback(() => {
            toggleTheme((newTheme) => {
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [dispatch, toggleTheme]);
        return (
            <Button
                theme="clear"
                className={classNames('', {}, [className])}
                onClick={onToggkeHendler}
            >
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
            </Button>
        );
    },
);
