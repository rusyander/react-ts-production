import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('get getProfileValidateErrors', () => {
  test('should return validate errors', () => {
    const validateErrors = [
      ValidateProfileError.INCORECT_USER_DATA,
      ValidateProfileError.INCORECT_AGE,
      ValidateProfileError.INCORECT_COUNTRY,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      validateErrors
    );
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
