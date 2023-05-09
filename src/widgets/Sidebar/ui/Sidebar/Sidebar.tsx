import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

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
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
              className,
            ])}
        >
          <button onClick={onToggle}>is open</button>
          <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.language} />
            </div>
      </div>
  );
}
