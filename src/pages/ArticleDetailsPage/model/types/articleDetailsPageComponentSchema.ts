// import { EntityState } from '@reduxjs/toolkit';
// import { Comments } from '@/entities/Comment';

// export interface ArticleDetailsPageComponentSchema
//   extends EntityState<Comments> {
//   isLoading?: boolean;
//   error?: string | undefined;
//   data?: Comments[] | undefined;
// }

// export interface ArticleDetailsCommentsSchema extends EntityState<Comments> {
//     isLoading?: boolean;
//     error?: string;
// }

export interface ArticleDetailsCommentsSchemaData {
    isLoading?: boolean;
    isError?: string;
    data: any;
}
