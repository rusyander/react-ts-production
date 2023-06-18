import { StateSchema } from 'app/providers/StoreProvider';

export const articlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const articlesPageError = (state: StateSchema) =>
  state.articlesPage?.error || undefined;
export const articlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || 'SMALL';
