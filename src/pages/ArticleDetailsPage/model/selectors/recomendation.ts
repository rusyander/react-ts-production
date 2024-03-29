import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
    state?.articleDetailsPage?.recommendations?.isLoading || false;

export const getArticleRecommendationError = (state: StateSchema) =>
    state?.articleDetailsPage?.recommendations?.error || undefined;
