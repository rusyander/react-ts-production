export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
// export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsPageComponentSchema';
export type { ArticleDetailsCommentsSchemaData } from './model/types/articleDetailsPageComponentSchema';

export {
    ArticleDetailsPageRecommendationsReducer,
    ArticleDetailsPageRecommendationsActions,
} from './model/slice/articleDetailsPageRecommendationsSlice';
export type { ArticleDetailsRecommendationSchema } from './model/types/articleDetailsRecommendationSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { articleDetailsPageReduser } from './model/slice/index';
export { getCanEditArticle } from './model/selectors/article';
