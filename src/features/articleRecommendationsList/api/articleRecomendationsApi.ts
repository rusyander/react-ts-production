import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], null>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const getArticleRecommendationsList =
  recomendationsApi.useGetArticleRecommendationsListQuery;
