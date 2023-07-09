import { Profile } from 'entities/Profile';

export interface ProfileSchema {
  form?: Profile;
  data?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}

export enum ValidateProfileError {
  INCORECT_USER_DATA = 'INCORECT_USER_DATA',
  INCORECT_AGE = 'INCORECT_AGE',
  INCORECT_COUNTRY = 'INCORECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
