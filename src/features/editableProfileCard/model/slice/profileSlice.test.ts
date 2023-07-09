import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileReducer, ProfileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
  ProfileSchema,
  ValidateProfileError,
} from '../types/editableProfileCardSchema';

const data = {
  first: 'test',
  lastname: 'test',
  age: 1,
  city: 'test',
  username: 'test',
  avatar: 'test',
  currency: 'RUB' as Currency,
  country: 'Russia' as Country,
  id: '1',
};
describe('ProfileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      ProfileReducer(state as ProfileSchema, ProfileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test('test set cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };
    expect(
      ProfileReducer(state as ProfileSchema, ProfileActions.cancelEdit())
    ).toEqual({ readonly: true, validateError: undefined, data, form: data });
  });

  test('test set updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };
    expect(
      ProfileReducer(
        state as ProfileSchema,
        ProfileActions.updateProfile({ username: '123' })
      )
    ).toEqual({ form: { username: '123' } });
  });

  test('test set updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      ProfileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test set updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      ProfileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      data,
      form: data,
    });
  });

  test('test set updateProfileData.rejected', () => {
    const state: DeepPartial<ProfileSchema> = {};
    expect(
      ProfileReducer(state as ProfileSchema, updateProfileData.rejected)
    ).toEqual({
      isLoading: false,
      validateError: undefined,
    });
  });
});
