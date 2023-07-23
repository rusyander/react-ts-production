import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailCommentsReducer } from './articleDetailCommentsSlice';
import { ArticleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReduser: any = combineReducers({
  articleDetailComments: ArticleDetailCommentsReducer,
  articleDetailsPageRecommendations: ArticleDetailsPageRecommendationsReducer,
});
