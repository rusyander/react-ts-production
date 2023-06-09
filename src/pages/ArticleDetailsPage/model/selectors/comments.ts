import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state?.articleDetailsPage?.articleDetailsComments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) =>
  state?.articleDetailsPage?.articleDetailsComments?.error || undefined;
