import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/Notification';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { Icon as IconOld } from '@/shared/ui/Icon';
import { Popovers as PopoversOld } from '@/shared/ui/Popups';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/Drawer/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

import NotificationIconNew from '@/shared/assets/redesigned/notification.svg';
import { Popovers } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIconNew}
                    onClick={onOpenDrawer}
                    clickable
                />
            }
            off={
                <ButtonOld theme="clear" onClick={onOpenDrawer}>
                    <IconOld Svg={NotificationIcon} inverted />
                </ButtonOld>
            }
        />
    );

    // (
    //   <Button theme="clear" onClick={onOpenDrawer}>
    //     <Icon Svg={NotificationIcon} inverted />
    //   </Button>
    // );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popovers
                            className={classNames(cls.notificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popovers>
                    }
                    off={
                        <PopoversOld
                            className={classNames(cls.notificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoversOld>
                    }
                />
                {/* <PopoversOld
                    className={classNames(cls.notificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </PopoversOld> */}
            </BrowserView>
            <MobileView>
                {trigger}
                {/* <AnimationProvider> */}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
                {/* </AnimationProvider> */}
            </MobileView>
        </div>
    );
});
