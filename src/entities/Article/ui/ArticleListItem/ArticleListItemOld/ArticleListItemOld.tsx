import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemOld.module.scss';

import { getRouteArticle_details } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Texts } from '@/shared/ui/Text';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Article, ArticleBlockType } from '@/entities/Article';
import { ArticleTextBlock } from './../../../model/types/article';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';

interface ArticleListItemOldProps {
    className?: string;
    article: Article;
    view: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemOld = memo((props: ArticleListItemOldProps) => {
    const { className, article, view = 'SMALL', target } = props;
    const { t } = useTranslation('article');
    // const navigate = useNavigate();
    const [isHover, bindHover] = useHover();
    // console.log('isHover', isHover);

    const types = (
        <Texts className={cls.types} text={article.type.join(', ')} />
    );
    const views = (
        <>
            <Texts className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                {...bindHover}
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid={'ArticleListItem'}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Texts
                            className={cls.username}
                            text={article.user.username}
                        />
                        <Texts className={cls.date} text={article.createdAt} />
                    </div>
                    <Texts className={cls.title} title={article.title} />
                    {types}
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
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticle_details(article.id)}
                        >
                            <Button theme="outline">
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        <div className={cls.viewsEl}>{views}</div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
            data-testid={'ArticleListItem'}
        >
            <AppLink target={target} to={getRouteArticle_details(article.id)}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                            fallback={<Skeleton width={200} height={200} />}
                        />
                        <Texts className={cls.date} text={article.createdAt} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Texts className={cls.title} text={article.title} />
                </Card>
            </AppLink>
        </div>
    );
});
