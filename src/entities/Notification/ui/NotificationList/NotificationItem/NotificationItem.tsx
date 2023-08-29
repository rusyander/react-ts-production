import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notifications } from '../../../model/types/notifications';
import { Card as CardOld } from '@/shared/ui/Card/ui/Card';
import { Texts as TextOld } from '@/shared/ui/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Texts } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notifications;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    variant="outlined"
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                >
                    <Texts title={item?.title} text={item?.description} />
                </Card>
            }
            off={
                <CardOld
                    theme="outlined"
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                >
                    <TextOld title={item?.title} text={item?.description} />
                </CardOld>
            }
        />
    );

    // (
    //   <CardOld
    //     theme="outlined"
    //     className={classNames(cls.notificationItem, {}, [className])}
    //   >
    //     <TextOld title={item?.title} text={item?.description} />
    //   </CardOld>
    // );
    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }
    return content;
});
