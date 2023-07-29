// import {
//   AnyAction,
//   PayloadAction,
//   createEntityAdapter,
//   createSlice,
// } from '@reduxjs/toolkit';
// import { ArticleDetailsPageComponentSchema } from '../types/articleDetailsPageComponentSchema';
// import { Comments } from '@/entities/Comment';
// import { StateSchema } from '@/app/providers/StoreProvider';
// import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

// // const commentsAdapter = createEntityAdapter<Comments>({
// //   selectId: (comment) => comment.id,
// // });

// // export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
// //   (state) =>
// //     state.articleDetailsPage?.articleDetailsComments ||
// //     commentsAdapter.getInitialState()
// // );

// const commentsAdapter = createEntityAdapter<Comments>({
//   selectId: (comment) => comment.id,
// });

// export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
//   (state) =>

//     state.articleDetailsPage?.articleDetailsComments ||
//     commentsAdapter.getInitialState()
// );

// const ArticleDetailCommentsSlice = createSlice({
//   name: 'articleDetailComments',
//   initialState:
//     commentsAdapter.getInitialState<ArticleDetailsPageComponentSchema>({
//       isLoading: false,
//       error: undefined,
//       ids: [],
//       entities: {
//         // 1: {
//         //   id: '1',
//         //   text: 'text',
//         //   user: {
//         //     id: '1',
//         //     username: 'name',
//         //   },
//         // },
//         // 2: {
//         //   id: '2',
//         //   text: 'text',
//         //   user: {
//         //     id: '1',
//         //     username: 'name',
//         //   },
//         // },
//       },
//     }),
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCommentsByArticleId.pending, (state) => {
//         state.isLoading = true;
//         state.error = undefined;
//       })
//       // .addCase(
//       //   fetchCommentsByArticleId.fulfilled,
//       //   (state, action: PayloadAction<Comments[]>) => {
//       //     state.isLoading = false;
//       //     state.error = undefined;
//       //     commentsAdapter.setAll(state, action.payload);
//       //     console.log('action.payload', action.payload);
//       //   }
//       // )

//       .addCase(
//         fetchCommentsByArticleId.fulfilled,
//         (state: any, action: PayloadAction<any>) => {
//           state.isLoading = false;
//           commentsAdapter.setAll(state, action.payload);
//         }
//       )

//       .addMatcher(asError, (state, action: AnyAction) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { actions: ArticleDetailCommentsActions } =
//   ArticleDetailCommentsSlice;
// export const { reducer: ArticleDetailCommentsReducer } =
//   ArticleDetailCommentsSlice;

// function asError(action: AnyAction) {
//   return action.type.endsWith('rejected');
// }

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { Comments } from '@/entities/Comment';
// import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
// import { ArticleDetailsPageComponentSchema } from '../types/articleDetailsPageComponentSchema';

// const initialState: ArticleDetailsPageComponentSchema | any = {
//   isLoading: false,
//   error: undefined,
//   data: undefined,
// };

// const articleDetailsCommentsSlice = createSlice({
//   name: 'articleDetailsCommentsSlice',
//   initialState,

//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCommentsByArticleId.pending, (state) => {
//         state.error = undefined;
//         state.isLoading = true;
//       })
//       .addCase(
//         fetchCommentsByArticleId.fulfilled,
//         (state, action: PayloadAction<Comments[]>) => {
//           state.isLoading = false;
//           // commentsAdapter.setAll(state, action.payload);
//           state.data = action.payload;
//           console.log('action.payload', action.payload);
//         }
//       )
//       .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Comments } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageComponentSchema } from '../types/articleDetailsPageComponentSchema';

const commentsAdapter = createEntityAdapter<Comments>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsPage?.articleDetailsComments ||
    commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState:
    commentsAdapter.getInitialState<ArticleDetailsPageComponentSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comments[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: ArticleDetailCommentsReducer } =
  articleDetailsCommentsSlice;
