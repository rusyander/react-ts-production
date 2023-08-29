import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotificationList } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from './NotificationItem/NotificationItem';
import { Skeleton as SkeletonOld } from '@/shared/ui/Skeleton/ui/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading, error } = useNotificationList(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.notificationList, {}, [className])}
            >
                <SkeletonOld width="100%" border="8px" height="80px" />
                <SkeletonOld width="100%" border="8px" height="80px" />
                <SkeletonOld width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.notificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item?.id} item={item} />
            ))}
        </VStack>
    );
});
