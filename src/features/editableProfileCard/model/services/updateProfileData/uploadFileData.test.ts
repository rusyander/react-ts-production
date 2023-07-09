import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsuncThunk';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../consts/consts';

const data = {
  first: 'test',
  lastname: 'test',
  age: 10,
  currency: 'RUB' as Currency,
  country: 'Russia' as Country,
  city: 'test',
  username: 'test',
  avatar: 'test',
};

describe('updateProfileData', () => {
  test('shod call updateProfileData success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.payload).toEqual(data);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('shod call error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, age: 0 },
      },
    });
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORECT_AGE]);
  });
});
