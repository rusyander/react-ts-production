import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  articlesPageHasMore,
  articlesPageIsLoading,
  articlesPagePageCount,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageSliceActions } from '../../slice/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlePage', async (_, { getState, dispatch }) => {
  const isLoading = articlesPageIsLoading(getState());
  const hasMore = articlesPageHasMore(getState());
  const page = articlesPagePageCount(getState());

  if (hasMore && !isLoading) {
    dispatch(ArticlePageSliceActions.setPage(page + 1));
    dispatch(fetchArticleList({ replace: false }));
  }
});
