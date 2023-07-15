import { FC, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingAsync = lazy<FC<ArticleRatingProps>>(
  async () => await import('./ArticleRating')
);
