import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailCommentsReducer } from './articleDetailCommentsSlice';
import { ArticleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReduser = combineReducers({
  articleDetailsComments: ArticleDetailCommentsReducer,
  articleDetailsPageRecommendations: ArticleDetailsPageRecommendationsReducer,
});
