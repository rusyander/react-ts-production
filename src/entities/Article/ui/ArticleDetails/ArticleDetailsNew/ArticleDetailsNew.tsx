import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsNew.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Texts } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import { AppImage } from '@/shared/ui/AppImage';

interface ArticleDetailsNewProps {
    className?: string;
    isLoading?: boolean;
    articleData?: any;
    renderBlock?: any;
    error?: any;
}

export const ArticleDetailsNew = memo((props: ArticleDetailsNewProps) => {
    const { className, articleData, isLoading, renderBlock, error } = props;
    const { t } = useTranslation('articleDetails');

    let content;

    if (isLoading) {
        content = (
            <VStack max gap="16">
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
            </VStack>
        );
    } else if (error) {
        content = (
            <Texts
                align="center"
                title={t('Произошла ошибка при загрузке статьи')}
                variant="error"
            />
        );
    } else {
        content = (
            <>
                <VStack gap="4" max>
                    <Texts size="l" title={articleData?.title} bold />
                    <Texts size="l" title={articleData?.subtitle} />
                    <AppImage
                        fallback={
                            <Skeleton width={'100%'} height={420} border="16" />
                        }
                        src={articleData?.img}
                        className={cls.image}
                    />
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
