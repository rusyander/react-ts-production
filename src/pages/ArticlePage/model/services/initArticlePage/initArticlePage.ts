import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageInited } from '../../selectors/articlesPageSelectors';
import { ArticlePageSliceActions } from '../../slice/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { ArticleSortFields } from '@/entities/Article';
import { ArticleType } from '@/entities/Article/model/types/article';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlePage',
  async (searchParams, { getState, dispatch }) => {
    const inited = articlesPageInited(getState());
    if (!inited) {
      const orderFromUrl = searchParams.get('_order') as
        | 'asc'
        | 'desc'
        | undefined;
      const sortFromUrl = searchParams.get('_sort') as ArticleSortFields;
      const pageFromUrl = searchParams.get('_page');
      const limitFromUrl = searchParams.get('_limit');
      const searchFromUrl = searchParams.get('q');
      const typeFromUrl = searchParams.get('type');

      if (orderFromUrl) {
        dispatch(ArticlePageSliceActions.setOrder(orderFromUrl));
      }

      if (sortFromUrl) {
        dispatch(ArticlePageSliceActions.setSort(sortFromUrl));
      }
      if (pageFromUrl) {
        // @ts-ignore
        dispatch(ArticlePageSliceActions.setPageCount(Number(pageFromUrl)));
      }
      if (limitFromUrl) {
        // @ts-ignore
        dispatch(ArticlePageSliceActions.setLimit(Number(limitFromUrl)));
      }
      if (searchFromUrl) {
        dispatch(ArticlePageSliceActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl) {
        dispatch(ArticlePageSliceActions.setType(typeFromUrl as ArticleType));
      }

      dispatch(ArticlePageSliceActions.initialState());
      dispatch(fetchArticleList({ replace: false }));
    }
  }
);
