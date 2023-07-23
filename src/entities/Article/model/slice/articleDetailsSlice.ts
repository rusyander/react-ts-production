import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/atricleDetailsSchema';
import { fetchArticlesById } from '../services/fetchArticlesById/fetchArticlesById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

const ArticleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticlesById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addMatcher(asError, (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: ArticleDetailsActions } = ArticleDetailsSlice;
export const { reducer: ArticleDetailsReducer } = ArticleDetailsSlice;

function asError (action: AnyAction) {
  return action.type.endsWith('rejected');
}
