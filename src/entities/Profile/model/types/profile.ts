import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  INCORECT_USER_DATA = 'INCORECT_USER_DATA',
  INCORECT_AGE = 'INCORECT_AGE',
  INCORECT_COUNTRY = 'INCORECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  form?: Profile;
  data?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
