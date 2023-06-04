import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('get getProfileData', () => {
  test('should return value', () => {
    const data = {
      age: 10,
      city: 'city',
      first: 'firstName',
      avatar: 'avatar',
      lastname: 'lastName',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
