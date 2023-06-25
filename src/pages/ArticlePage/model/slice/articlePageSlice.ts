import {
  AnyAction,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { Article, ArticleSortFields } from 'entities/Article';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';

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
    _inited: false,
    order: 'asc',
    sort: 'createdAt',
    search: '',
    type: 'ALL',
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
      state._inited = true;
    },

    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },

    setSort: (state, action: PayloadAction<ArticleSortFields>) => {
      state.sort = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })

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
