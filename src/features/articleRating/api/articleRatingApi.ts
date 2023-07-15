import { RatingCardProps } from '@/entities/RatingCard';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingProps {
  userId: string;
  articleId: string;
}

interface RateArticleProps {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getarticleRating: build.query<RatingCardProps[], GetArticleRatingProps>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),

    rateArticle: build.mutation<void, RateArticleProps>({
      //   query: ({ userId, articleId, rate, feedback }) => ({
      query: (arg) => ({
        url: '/article-ratings',
        body: arg,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const getarticleRating = articleRatingApi.useGetarticleRatingQuery;
export const rateArticleMutation = articleRatingApi.useRateArticleMutation;
