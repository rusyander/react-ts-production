import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { ArticlePageSliceReducer } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlePage.module.scss';

const reducers: ReducersList = {
  articlesPage: ArticlePageSliceReducer,
};
function ArticlePage () {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmaunt={false}>
      <Page onScrollEnd={onLoadNextPage}>
        <div className={cls.list}>
          <ArticlePageFilters />
          <ArticleInfiniteList />
          {/* <ArticleList
            view={views}
            isLoading={isLoading}
            // article={new Array(2).fill(articleMock).map((item, index) => {
            //   return { ...item, id: index.toString() };
            // })}
            article={articles}
            className={cls.list}
          /> */}
        </div>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlePage);
