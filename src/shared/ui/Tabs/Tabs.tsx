import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';

export interface TabItem {
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (value: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, onTabClick, tabs, value } = props;
  const onClick = useCallback(
    (tab: TabItem) => {
      onTabClick(tab);
    },
    [onTabClick]
  );
  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => {
        return (
          <Card
            key={tab.value}
            theme={tab.value === value ? 'outlined' : 'normal'}
            className={classNames(cls.tab)}
            onClick={() => onClick(tab)}
          >
            {tab.content}
          </Card>
        );
      })}
    </div>
  );
});
