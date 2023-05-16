import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  function onToggle () {
    setCollapsed((prev) => !prev)
  }
  return (
      <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
              className
            ])}
        >
            <Button data-testid="sidebat-toggle" onClick={onToggle}>
              is open
            </Button>
            <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher className={cls.language} />
          </div>
        </div>
  )
}
