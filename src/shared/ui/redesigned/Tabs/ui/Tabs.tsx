import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../../Card';
import { Flex, FlexDirection } from '@/shared/ui/Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: React.ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (value: TabItem) => void;
    direction: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, onTabClick, tabs, value, direction = 'row' } = props;
    const onClick = useCallback(
        (tab: TabItem) => {
            onTabClick(tab);
        },
        [onTabClick],
    );
    return (
        <Flex
            align="start"
            direction={direction}
            gap="8"
            className={classNames(cls.tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                return (
                    <Card
                        key={tab.value}
                        variant={tab.value === value ? 'light' : 'normal'}
                        className={classNames(cls.tab)}
                        onClick={() => onClick(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
