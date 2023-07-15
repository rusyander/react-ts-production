import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { getArticlesDetailsDataSelectors } from '../../../../../entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetailComments/addCommentForArticle',
  async (text, { extra, rejectWithValue, getState, dispatch }) => {
    const userData = getUserAuthData(getState());
    const article = getArticlesDetailsDataSelectors(getState());

    if (!userData || !text || !article) return rejectWithValue('error');

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        text,
        userId: userData.id,
      });
      if (!response.data) throw new Error();

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
