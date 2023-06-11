import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesDetailsDataSelectors = (state: StateSchema) =>
  state.articleDetails?.data || undefined;

export const getArticlesDetailsErrorSelectors = (state: StateSchema) =>
  state.articleDetails?.error || undefined;

export const getArticlesDetailsLoadingSelectors = (state: StateSchema) =>
  state.articleDetails?.isLoading || false;
