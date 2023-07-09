import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('get getProfileForm', () => {
  test('should return value', () => {
    const formData = {
      age: 10,
      city: 'city',
      first: 'firstName',
      avatar: 'avatar',
      lastname: 'lastName',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  });

  test('should return error undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
