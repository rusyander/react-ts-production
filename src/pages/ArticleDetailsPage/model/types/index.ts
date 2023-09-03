// import { ArticleDetailsCommentsSchema } from './articleDetailsPageComponentSchema';
import { ArticleDetailsCommentsSchemaData } from './articleDetailsPageComponentSchema';

import { ArticleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
    // comments?: ArticleDetailsCommentsSchema;
    comments?: ArticleDetailsCommentsSchemaData;

    recommendations?: ArticleDetailsRecommendationSchema;
}
