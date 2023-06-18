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
  }),
  reducers: {
    setView: (state, action: PayloadAction<'SMALL' | 'BIG'>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initialState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as
        | 'SMALL'
        | 'BIG';
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
          articlesAdapter.setAll(state, action.payload);
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
