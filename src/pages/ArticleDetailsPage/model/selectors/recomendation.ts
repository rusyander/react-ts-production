import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
  state?.articleDetailsPage?.articleDetailsPageRecommendations?.isLoading ||
  false;

export const getArticleRecommendationError = (state: StateSchema) =>
  state?.articleDetailsPage?.articleDetailsPageRecommendations?.error ||
  undefined;
