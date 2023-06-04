import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsuncThunk';
import { fetchProfileData } from './fetchProfileData';

const profileValue = {
  first: 'test',
  lastname: 'test',
  age: 1,
  currency: 'test',
  country: 'test',
  city: 'test',
  username: 'test',
  avatar: 'test',
};

describe('fetchProfileData', () => {
  test('shod call fetchProfileData success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('shod call error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
