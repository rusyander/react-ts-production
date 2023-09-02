import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsOld.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Texts } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CreateDateIcon from '@/shared/assets/icons/create-date.svg';

interface ArticleDetailsOldProps {
    className?: string;
    isLoading?: boolean;
    articleData?: any;
    renderBlock?: any;
    error?: any;
}

export const ArticleDetailsOld = memo((props: ArticleDetailsOldProps) => {
    const { className, articleData, isLoading, renderBlock, error } = props;
    const { t } = useTranslation('articleDetails');

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    height="200px"
                    width="200px"
                    border="50%"
                />
                <Skeleton className={cls.title} height="40px" width="400px" />
                <Skeleton
                    className={cls.skeleton}
                    height="30px"
                    width="200px"
                />
                <Skeleton
                    className={cls.skeleton}
                    height="220px"
                    width="100%"
                />
                <Skeleton
                    className={cls.skeleton}
                    height="220px"
                    width="100%"
                />
            </>
        );
    } else if (error) {
        content = (
            <Texts
                align="center"
                title={t('Произошла ошибка при загрузке статьи')}
                theme="error"
            />
        );
    } else {
        content = (
            <>
                <HStack
                    data-testid={'ArticleDetails.Info'}
                    justify="center"
                    max
                    className={cls.avatarWrapper}
                >
                    <Avatar
                        size={200}
                        src={articleData?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Texts
                        size="sizeL"
                        className={cls.title}
                        title={articleData?.title}
                        text={articleData?.subtitle}
                    />
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Texts text={String(articleData?.views)} />
                    </HStack>
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={CreateDateIcon} className={cls.icon} />
                        <Texts text={articleData?.createdAt} />
                    </HStack>
                </VStack>

                {articleData?.blocks.map((block: any) => renderBlock(block))}
            </>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.articleDetails, {}, [className])}
        >
            {content}
        </VStack>
    );
});
