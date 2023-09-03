import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comments } from '../../model/types/comment';
import { Avatar as AvatarOld } from '@/shared/ui/Avatar/ui/Avatar';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { Skeleton as SkeletonOld } from '@/shared/ui/Skeleton/ui/Skeleton';
import { AppLink as AppLinkOld } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Texts } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <div
                        className={classNames(cls.commentCard, {}, [className])}
                        data-testid={'CommentCard.loading'}
                    >
                        <div className={cls.header}>
                            <Skeleton border="50%" width={30} height={30} />
                            <Skeleton
                                width={100}
                                height={16}
                                className={cls.username}
                            />
                        </div>
                        <Skeleton
                            width="100%"
                            height={50}
                            className={cls.text}
                        />
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.commentCard, {}, [className])}
                        data-testid={'CommentCard.loading'}
                    >
                        <div className={cls.header}>
                            <SkeletonOld border="50%" width={30} height={30} />
                            <SkeletonOld
                                width={100}
                                height={16}
                                className={cls.username}
                            />
                        </div>
                        <SkeletonOld
                            width="100%"
                            height={50}
                            className={cls.text}
                        />
                    </div>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card max padding="24" border="round">
                    <VStack
                        max
                        gap="8"
                        className={classNames(cls.commentCardRedesigned, {}, [
                            className,
                            cls.loading,
                        ])}
                        data-testid={'CommentCard.content'}
                    >
                        <AppLink
                            className={cls.header}
                            to={getRouteProfile(comment?.user?.id || '')}
                        >
                            {comment?.user.avatar ? (
                                <Avatar size={30} src={comment.user.avatar} />
                            ) : null}
                            <Texts
                                className={cls.username}
                                title={comment?.user.username}
                                bold
                            />
                        </AppLink>
                        <Texts className={cls.text} text={comment?.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    max
                    gap="8"
                    className={classNames(cls.commentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                    data-testid={'CommentCard.content'}
                >
                    <AppLinkOld
                        className={cls.header}
                        to={getRouteProfile(comment?.user?.id || '')}
                    >
                        {comment?.user.avatar ? (
                            <AvatarOld size={30} src={comment.user.avatar} />
                        ) : null}
                        <TextsOld
                            className={cls.username}
                            title={comment?.user.username}
                        />
                    </AppLinkOld>
                    <TextsOld className={cls.text} text={comment?.text} />
                </VStack>
            }
        />
    );

    // (
    //   <VStack
    //     max
    //     gap="8"
    //     className={classNames(cls.commentCard, {}, [className, cls.loading])}
    //     data-testid={'CommentCard.content'}
    //   >
    //     <AppLink
    //       className={cls.header}
    //       to={getRouteProfile(comment?.user?.id || '')}
    //     >
    //       {comment?.user.avatar ? (
    //         <Avatar size={30} src={comment.user.avatar} />
    //       ) : null}
    //       <Texts className={cls.username} title={comment?.user.username} />
    //     </AppLink>
    //     <Texts className={cls.text} text={comment?.text} />
    //   </VStack>
    // );
});
