import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { articlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticleList',
  async (props, { extra, rejectWithValue, getState }) => {
    const { page = 1 } = props;
    const getLimit = articlesPageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: getLimit,
          _page: page,
        },
      });
      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
