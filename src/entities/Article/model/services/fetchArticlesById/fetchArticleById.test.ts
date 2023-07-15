import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsuncThunk';
import { fetchArticlesById } from './fetchArticlesById';

const profileValue = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
};

describe('fetchArticlesById', () => {
  test('shod call fetchArticlesById success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('shod call error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('2');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
