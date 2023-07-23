export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article, ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/atricleDetailsSchema';
export { getArticlesDetailsDataSelectors } from './model/selectors/getArticlesDetailsSelectors/getArticlesDetailsSelectors';
export { ArticleList } from './ui/ArticleList/ArticleList';
export type { ArticleSortFields } from './model/types/article';
export { ArticleBlockType } from './model/consts/consts';
export {
  ArticleDetailsReducer,
  ArticleDetailsActions,
} from './model/slice/articleDetailsSlice';
export type { ArticleType } from './model/types/article';
