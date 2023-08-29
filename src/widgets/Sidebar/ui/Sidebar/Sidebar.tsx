import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/Button/ui/Button';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/redesigned/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={cls.appLogo}
                    />
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>

                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LanguageSwitcher
                            short={collapsed}
                            className={cls.lang}
                        />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme="backgroundInverted"
                        size="size_l"
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LanguageSwitcher
                            short={collapsed}
                            className={cls.lang}
                        />
                    </div>
                </aside>
            }
        />
    );

    // return (
    //   <aside
    //     data-testid="sidebar"
    //     className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
    //       className,
    //     ])}
    //   >
    //     <Button
    //       data-testid="sidebar-toggle"
    //       onClick={onToggle}
    //       className={cls.collapseBtn}
    //       theme="backgroundInverted"
    //       size="size_l"
    //       square
    //     >
    //       {collapsed ? '>' : '<'}
    //     </Button>
    //     <VStack role="navigation" gap="8" className={cls.items}>
    //       {itemsList}
    //     </VStack>
    //     <div className={cls.switchers}>
    //       <ThemeSwitcher />
    //       <LanguageSwitcher short={collapsed} className={cls.lang} />
    //     </div>
    //   </aside>
    // );
});
