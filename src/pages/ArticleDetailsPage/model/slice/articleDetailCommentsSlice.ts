import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comments } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchemaData } from '../types/articleDetailsPageComponentSchema';
// import { ArticleDetailsCommentsSchema, ArticleDetailsCommentsSchemaData } from '../types/articleDetailsPageComponentSchema';
// // import { ArticleDetailsPageComponentSchema } from '../types/articleDetailsPageComponentSchema';

// const commentsAdapter = createEntityAdapter<Comments>({
//     selectId: (comment) => comment.id,
// });

// // export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
// //     (state) =>
// //         state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
// // );

// export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
//     (state) =>
//         state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
// );

// const articleDetailsCommentsSlice = createSlice({
//     name: 'articleDetailsCommentsSlice',
//     initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
//         {
//             isLoading: false,
//             error: undefined,
//             ids: [],
//             // entities: {},
//             entities: {
//                 1: {
//                     id: '1',
//                     text: 'text',
//                     user: {
//                         id: '1',
//                         username: 'name',
//                     },
//                 },
//                 2: {
//                     id: '2',
//                     text: 'text',
//                     user: {
//                         id: '1',
//                         username: 'name',
//                     },
//                 },
//             },
//         },
//     ),
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchCommentsByArticleId.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(
//                 fetchCommentsByArticleId.fulfilled,
//                 (state, action: PayloadAction<Comments[]>) => {
//                     state.isLoading = false;
//                     commentsAdapter.setAll(state, action.payload);
//                     console.log('state', state, action.payload);
//                 },
//             )
//             .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });

const initialState: ArticleDetailsCommentsSchemaData = {
    isError: undefined,
    isLoading: false,
    data: undefined,
};

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isError = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comments[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    },
});

export const { actions: articleDetailsCommentsSliceActions } =
    articleDetailsCommentsSlice;
export const { reducer: ArticleDetailCommentsReducer } =
    articleDetailsCommentsSlice;
