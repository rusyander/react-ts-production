import {
  AnyAction,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { ArticleDetailsPageComponentSchema } from '../types/articleDetailsPageComponentSchema';
import { Comments } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comments>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsPage?.articleDetailsComments ||
    commentsAdapter.getInitialState()
);

const ArticleDetailCommentsSlice = createSlice({
  name: 'articleDetailComments',
  initialState:
    commentsAdapter.getInitialState<ArticleDetailsPageComponentSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {
        // 1: {
        //   id: '1',
        //   text: 'text',
        //   user: {
        //     id: '1',
        //     username: 'name',
        //   },
        // },
        // 2: {
        //   id: '2',
        //   text: 'text',
        //   user: {
        //     id: '1',
        //     username: 'name',
        //   },
        // },
      },
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comments[]>) => {
          state.isLoading = false;
          state.error = undefined;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addMatcher(asError, (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: ArticleDetailCommentsActions } =
  ArticleDetailCommentsSlice;
export const { reducer: ArticleDetailCommentsReducer } =
  ArticleDetailCommentsSlice;

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
