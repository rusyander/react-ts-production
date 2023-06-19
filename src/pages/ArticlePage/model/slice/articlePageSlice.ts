import {
  AnyAction,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { Article } from 'entities/Article';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const ArticlePageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'SMALL',
    page: 1,
    limit: 10,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<'SMALL' | 'BIG'>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initialState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as
        | 'SMALL'
        | 'BIG';
      state.view = view;
      state.limit = view === 'SMALL' ? 10 : 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticleList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          state.error = undefined;
          articlesAdapter.addMany(state, action.payload);
          console.log('action.payload.length', action.payload.length);

          state.hasMore = action.payload.length > 0;
        }
      )

      .addMatcher(asError, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ArticlePageSliceActions = ArticlePageSlice.actions;
export const ArticlePageSliceReducer = ArticlePageSlice.reducer;

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
