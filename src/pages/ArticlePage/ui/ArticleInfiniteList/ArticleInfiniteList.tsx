import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import {
  articlesPageError,
  articlesPageIsLoading,
  articlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { getArticles } from '../../model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(articlesPageIsLoading);
  const views = useSelector(articlesPageView);
  const isError = useSelector(articlesPageError);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams));
  });

  if (isError) {
    return (
      <Page>
        <h1>{isError}</h1>
      </Page>
    );
  }

  return (
    <ArticleList
      view={views}
      isLoading={isLoading}
      // article={new Array(2).fill(articleMock).map((item, index) => {
      //   return { ...item, id: index.toString() };
      // })}
      article={articles}
      className={className}
    />
  );
});
