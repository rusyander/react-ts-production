import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { FC, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy<FC<AddCommentFormProps>>(
  async () => await import('./ArticleDetailsPage')
);
