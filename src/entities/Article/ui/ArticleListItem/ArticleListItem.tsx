import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemOld } from './ArticleListItemOld/ArticleListItemOld';
import { ArticleListItemNew } from './ArticleListItemNew/ArticleListItemNew';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view = 'SMALL', target } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ArticleListItemNew
                    // article={article}
                    // view={view}
                    // target={target}
                    // className={className}
                    {...props}
                />
            }
            off={
                <ArticleListItemOld
                    // article={article}
                    // view={view}
                    // target={target}
                    // className={className}
                    {...props}
                />
            }
        />
    );
});
