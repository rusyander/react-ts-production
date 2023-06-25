import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  articlesPageLimit,
  articlesPageOrder,
  articlesPagePageCount,
  articlesPageSearch,
  articlesPageSort,
  articlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticleList',
  async (_, { extra, rejectWithValue, getState }) => {
    const getLimit = articlesPageLimit(getState());
    const orders = articlesPageOrder(getState());
    const sort = articlesPageSort(getState());
    const search = articlesPageSearch(getState());
    const page = articlesPagePageCount(getState());
    const type = articlesPageType(getState());

    try {
      // window.history.pushState(null, '', `?page=${page}`);
      // @ts-ignore
      addQueryParams({ page, getLimit, type, sort, orders, search });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: getLimit,
          _page: page,
          _order: orders,
          _sort: sort,
          q: search,
          type: type === 'ALL' ? undefined : type,
        },
      });
      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
