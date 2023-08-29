import React, { memo, type FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';

import LightIcon from '../../../shared/assets/icons/theme-light.svg';
// import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';

import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Icon as IconOld } from '@/shared/ui/Icon';
import { ToggleFeatures } from '@/shared/lib/features';

import ThemeIcon from '../../../shared/assets/redesigned/theme.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
// import { Button } from '@/shared/ui/redesigned/Button';

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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Icon
                        Svg={ThemeIcon}
                        onClick={onToggkeHendler}
                        width={40}
                        height={40}
                    />
                }
                off={
                    <ButtonOld
                        theme="clear"
                        className={classNames('', {}, [className])}
                        onClick={onToggkeHendler}
                    >
                        <IconOld
                            Svg={LightIcon}
                            width={40}
                            height={40}
                            inverted
                        />
                    </ButtonOld>
                }
            />
        );

        // (
        //     <Button
        //         theme="clear"
        //         className={classNames('', {}, [className])}
        //         onClick={onToggkeHendler}
        //     >
        //         <Icon Svg={LightIcon} width={40} height={40} inverted />

        //         {/* <DarkIcon className="iconThemeColor" />

        //          */}
        //         {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
        //     </Button>
        // );
    },
);
