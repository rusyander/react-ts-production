import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
import { log } from 'console';

export const fetchArticlesById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticlesById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
