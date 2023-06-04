import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('get getProfileIsLoading', () => {
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
