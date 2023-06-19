import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsuncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');
describe('fetchNextArticlePage', () => {
  test('shod call fetchArticlesById success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'SMALL',
        page: 2,
        limit: 5,
        hasMore: true,
      },
    });

    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticleList).toBeCalledWith({ page: 3 });
  });
  test('shod call fetchArticlesById not colled', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'SMALL',
        page: 2,
        limit: 5,
        hasMore: false,
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toBeCalledWith();
  });

  test('shod call fetchArticlesById not colled becose isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
        view: 'SMALL',
        page: 2,
        limit: 5,
        hasMore: true,
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toBeCalledWith();
  });
});
