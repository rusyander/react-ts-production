import { ArticleDetailsPageComponentSchema } from './articleDetailsPageComponentSchema';
import { ArticleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
  articleDetailsComments?: ArticleDetailsPageComponentSchema;
  articleDetailsPageRecommendations?: ArticleDetailsRecommendationSchema;
}
