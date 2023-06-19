import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string | undefined;
  view?: 'SMALL' | 'BIG';

  // paginations
  page?: number;
  limit?: number;
  hasMore?: boolean;
}
