import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Card as CardOld } from '@/shared/ui/Card/ui/Card';
import { Skeleton as SkeletonOld } from '@/shared/ui/Skeleton/ui/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: string;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view = 'SMALL' } = props;

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonOld,
        });

        const Card = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => CardRedesigned,
            off: () => CardOld,
        });

        if (view === 'BIG') {
            return (
                <div
                    className={classNames(cls.articleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                className={cls.username}
                                width={150}
                                height={16}
                            />
                            <Skeleton
                                className={cls.date}
                                width={150}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            className={cls.title}
                            width={250}
                            height={24}
                        />

                        <Skeleton
                            width="100%"
                            height={250}
                            className={cls.img}
                        />
                        <Skeleton width="100%" height={200} />

                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                            <div className={cls.viewsEl}>
                                {' '}
                                <Skeleton width={100} height={36} />
                            </div>
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton height={16} width={150} className={cls.title} />
                </Card>
            </div>
        );
    },
);
