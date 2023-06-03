import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
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
}
