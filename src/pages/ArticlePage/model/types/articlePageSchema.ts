import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortFields } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string | undefined;

  // paginations
  page?: number;
  limit: number;
  hasMore?: boolean;
  // inited
  _inited: boolean;
  // filters
  view?: 'SMALL' | 'BIG';
  order: SortOrder;
  sort: ArticleSortFields;
  search: string;
  type: ArticleType;
}
