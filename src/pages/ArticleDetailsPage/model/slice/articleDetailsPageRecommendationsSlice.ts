import {
  AnyAction,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { Article } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recommendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.articleDetailsPageRecommendations ||
      recommendationAdapter.getInitialState()
  );

const ArticleDetailsPageRecommendations = createSlice({
  name: 'articleDetailsPageRecommendations',
  initialState:
    recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {
        // 1: {
        //   id: '1',
        //   text: 'text',
        //   user: {
        //     id: '1',
        //     username: 'name',
        //   },
        // },
        // 2: {
        //   id: '2',
        //   text: 'text',
        //   user: {
        //     id: '1',
        //     username: 'name',
        //   },
        // },
      },
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticleRecomendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          state.error = undefined;
          recommendationAdapter.setAll(state, action.payload);
        }
      )
      .addMatcher(asError, (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ArticleDetailsPageRecommendationsReducer =
  ArticleDetailsPageRecommendations.reducer;
export const ArticleDetailsPageRecommendationsActions =
  ArticleDetailsPageRecommendations.actions;

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
