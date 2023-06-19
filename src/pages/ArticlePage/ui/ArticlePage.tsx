import { ArticleList, ArticleViewSections } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import {
  ArticlePageSliceActions,
  ArticlePageSliceReducer,
  getArticles,
} from '../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import {
  articlesPageIsLoading,
  articlesPageError,
  articlesPageView,
  articlesPagePageCount,
  articlesPageHasMore,
} from '../model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';
import { log } from 'console';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';

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

  const onChangeViews = useCallback(
    (view: 'SMALL' | 'BIG') => {
      dispatch(ArticlePageSliceActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(ArticlePageSliceActions.initialState());
    dispatch(
      fetchArticleList({
        page: 1,
      })
    );
  });

  if (isError) {
    return (
      <Page>
        <h1>{isError}</h1>
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPage}>
        <div>
          <ArticleViewSections view={views} onViewClick={onChangeViews} />
          <ArticleList
            view={views}
            isLoading={isLoading}
            // article={new Array(2).fill(articleMock).map((item, index) => {
            //   return { ...item, id: index.toString() };
            // })}
            article={articles}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlePage);
