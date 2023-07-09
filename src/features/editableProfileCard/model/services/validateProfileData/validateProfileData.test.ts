import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import { ValidateProfileError } from '../../consts/consts';

const data = {
  first: 'test',
  lastname: 'test',
  age: 1,
  city: 'test',
  username: 'test',
  avatar: 'test',
  currency: 'RUB' as Currency,
  country: 'Russia' as Country,
};

describe('validateProfileData', () => {
  test('shod call validateProfileData no error', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstName and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
  });

  test('without currency', async () => {
    const result = validateProfileData({ ...data, country: '' as Country });
    expect(result).toEqual([ValidateProfileError.INCORECT_COUNTRY]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
  });

  test('without data', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORECT_USER_DATA,
      ValidateProfileError.INCORECT_AGE,
      ValidateProfileError.INCORECT_COUNTRY,
    ]);
  });
});
