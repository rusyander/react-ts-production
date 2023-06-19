import { StateSchema } from 'app/providers/StoreProvider';

export const articlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const articlesPageError = (state: StateSchema) =>
  state.articlesPage?.error || undefined;
export const articlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || 'SMALL';

export const articlesPagePageCount = (state: StateSchema) =>
  state.articlesPage?.page || 1;
export const articlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 10;
export const articlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore || false;
