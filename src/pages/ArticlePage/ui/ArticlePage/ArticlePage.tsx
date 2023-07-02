import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ArticlePageSliceReducer,
  getArticles,
} from '../../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import {
  articlesPageIsLoading,
  articlesPageError,
  articlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import cls from './ArticlePage.module.scss';
import { useSearchParams } from 'react-router-dom';

const reducers: ReducersList = {
  articlesPage: ArticlePageSliceReducer,
};
function ArticlePage() {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(articlesPageIsLoading);
  const isError = useSelector(articlesPageError);
  const views = useSelector(articlesPageView);
  const [searchParams] = useSearchParams();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmaunt={false}>
      <Page onScrollEnd={onLoadNextPage}>
        <div>
          <ArticlePageFilters />
          <ArticleList
            view={views}
            isLoading={isLoading}
            // article={new Array(2).fill(articleMock).map((item, index) => {
            //   return { ...item, id: index.toString() };
            // })}
            article={articles}
            className={cls.list}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlePage);
