import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Texts } from 'shared/ui/Text';

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

  if (!isLoading && article.length === 0) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Texts size="sizeL" text={t('Статьи не найдены')} />
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
      {isLoading && (
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
        >
          {new Array(view === 'SMALL' ? 9 : 6).fill(0).map((_, index) => (
            <ArticleListItemSkeleton
              view={view}
              key={index}
              className={cls.card}
            />
          ))}
        </div>
      )}
    </div>
  );
});
