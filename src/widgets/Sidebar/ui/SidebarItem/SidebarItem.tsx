import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink as AppLinkDiprecated } from '@/shared/ui/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <AppLinkDiprecated
                    theme="secondary"
                    to={item?.path || item!.path!.toString()}
                    className={classNames(
                        cls.item,
                        { [cls.collapsed]: collapsed },
                        [''],
                    )}
                >
                    {item?.Icon && <item.Icon className={cls.icon} />}
                    <span className={cls.link}>{t(item!.text)}</span>
                </AppLinkDiprecated>
            }
            on={
                <AppLink
                    to={item?.path || item!.path!.toString()}
                    className={classNames(
                        cls.itemRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [''],
                    )}
                    activeClassName={cls.active}
                >
                    {item?.Icon && <Icon Svg={item?.Icon} />}
                    {!collapsed && (
                        <span className={cls.linkRedesign}>
                            {t(item!.text)}
                        </span>
                    )}
                </AppLink>
            }
        />
    );

    //   <AppLink
    //     theme="secondary"
    //     to={item?.path || item!.path!.toString()}
    //     className={classNames(cls.item, { [cls.collapsed]: collapsed }, [''])}
    //   >
    //     {item?.Icon && <item.Icon className={cls.icon} />}
    //     <span className={cls.link}>{t(item!.text)}</span>
    //   </AppLink>
    // );
});
