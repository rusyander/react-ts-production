import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProvider'

import LightIcon from '../../../shared/assets/icons/theme-light.svg'
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg'

import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme()
    return (
      <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
  );
}
