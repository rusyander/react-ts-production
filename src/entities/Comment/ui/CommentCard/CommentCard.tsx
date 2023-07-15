import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comments } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Texts } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { VStack } from '@/shared/ui/Stack';

interface CommentCardProps {
  className?: string;
  comment?: Comments;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton border="50%" width={30} height={30} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    );
  }

  return (
    <VStack
      max
      gap="8"
      className={classNames(cls.commentCard, {}, [className, cls.loading])}
    >
      <AppLink
        className={cls.header}
        to={`${RoutePath.profile}${comment?.user?.id || ''}`}
      >
        {comment?.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Texts className={cls.username} title={comment?.user.username} />
      </AppLink>
      <Texts className={cls.text} text={comment?.text} />
    </VStack>
  );
});
