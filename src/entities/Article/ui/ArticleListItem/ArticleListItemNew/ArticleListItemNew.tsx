import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemNew.module.scss';

import { getRouteArticle_details } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Article, ArticleBlockType } from '@/entities/Article';
import { ArticleTextBlock } from './../../../model/types/article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Texts } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
interface ArticleListItemNewProps {
    className?: string;
    article: Article;
    view: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemNew = memo((props: ArticleListItemNewProps) => {
    const { className, article, view = 'SMALL', target } = props;
    const { t } = useTranslation('article');

    const types = (
        <Texts className={cls.types} text={article.type.join(', ')} />
    );
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Texts className={cls.views} text={String(article.views)} />
        </HStack>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                max
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid={'ArticleListItem'}
            >
                <VStack max gap="16">
                    <HStack max gap="8">
                        <Avatar src={article.user.avatar} size={32} />
                        <Texts text={article.user.username} bold />
                        <Texts text={article.createdAt} />
                    </HStack>
                    <Texts bold title={article.title} />
                    <Texts size="s" title={article.subtitle} />
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="between" align="center">
                        <AppLink
                            target={target}
                            to={getRouteArticle_details(article.id)}
                        >
                            <Button variant="outline">
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        <div className={cls.viewsEl}>{views}</div>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticle_details(article.id)}
            data-testid={'ArticleListItem'}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} border="round">
                <AppImage
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                    fallback={<Skeleton width={200} height={200} />}
                />
                <VStack max className={cls.infoWrapper} gap="4">
                    <Texts className={cls.title} text={article.title} />
                    <VStack max className={cls.footer} gap="4">
                        <HStack max justify="between">
                            <Texts
                                // className={cls.date}
                                text={article?.createdAt}
                            />
                            {views}
                        </HStack>
                        <HStack max gap="8">
                            <Avatar src={article.user.avatar} size={32} />
                            <Texts text={article.user.username} bold />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
