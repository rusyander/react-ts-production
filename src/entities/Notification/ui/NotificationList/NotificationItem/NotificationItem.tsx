import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notifications } from '../../../model/types/notifications';
import { Card } from '@/shared/ui/Card/ui/Card';
import { Texts } from '@/shared/ui/Text';

interface NotificationItemProps {
  className?: string;
  item: Notifications;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();
  const content = (
    <Card
      theme="outlined"
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Texts title={item?.title} text={item?.description} />
    </Card>
  );
  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
});
