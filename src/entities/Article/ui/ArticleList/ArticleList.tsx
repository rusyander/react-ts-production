import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  article: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'SMALL' ? 9 : 6)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, article, view = 'SMALL', isLoading } = props;
  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {new Array(view === 'SMALL' ? 9 : 6).fill(0).map((_, index) => (
          <ArticleListItemSkeleton
            view={view}
            key={index}
            className={cls.card}
          />
        ))}
      </div>
    );
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        className={cls.card}
        key={article.id}
      />
    );
  };

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {article.length > 0 ? article.map(renderArticle) : null}
    </div>
  );
});
