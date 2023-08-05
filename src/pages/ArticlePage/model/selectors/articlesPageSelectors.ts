import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

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
export const articlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited || false;

export const articlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order || 'asc';
export const articlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort || 'createdAt';
export const articlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search || '';

export const articlesPageType = (state: StateSchema) =>
    state.articlesPage?.type || 'ALL';

export const [useArticleById] = buildSelector(
    (state, id: string) => state.articlesPage?.entities[id],
);
