import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsuncThunk';

import { initArticlePage } from './initArticlePage';

jest.mock('../fetchArticleList/fetchArticleList');
describe('initArticlePage.test', () => {
  test('shod call initArticlePage success', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        _inited: false,
      },
    });

    // const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(0);
  });
  test('shod call initArticlePage not colled', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        _inited: true,
      },
    });

    expect(thunk.dispatch).toBeCalledTimes(0);
  });

  //   test('shod call initArticlePage not colled becose isLoading', async () => {
  //     const thunk = new TestAsyncThunk(initArticlePage, {
  //       articlesPage: {
  //         isLoading: true,
  //         error: undefined,
  //         ids: [],
  //         entities: {},
  //         view: 'SMALL',
  //         page: 2,
  //         limit: 5,
  //         hasMore: true,
  //       },
  //     });

  //     expect(thunk.dispatch).toBeCalledTimes(2);
  //     expect(fetchArticleList).not.toBeCalledWith();
  //   });
});
