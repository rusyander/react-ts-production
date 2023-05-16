import React from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export function Navbar ({ className }: NavbarProps) {
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
              <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.mainLink}
                >
                    Main
                </AppLink>

              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    About
                </AppLink>
          </div>
        </div>
  )
}