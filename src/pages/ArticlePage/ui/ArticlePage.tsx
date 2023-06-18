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
} from '../model/selectors/articlesPageSelectors';

const reducers: ReducersList = {
  articlesPage: ArticlePageSliceReducer,
};
function ArticlePage() {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();
  useInitialEffect(() => {
    dispatch(fetchArticleList());
    dispatch(ArticlePageSliceActions.initialState());
  });

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(articlesPageIsLoading);
  const isError = useSelector(articlesPageError);
  const views = useSelector(articlesPageView);

  console.log('articles', articles);

  const onChangeViews = useCallback(
    (view: 'SMALL' | 'BIG') => {
      dispatch(ArticlePageSliceActions.setView(view));
    },
    [dispatch]
  );

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
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
    </DynamicModuleLoader>
  );
}

export default memo(ArticlePage);
