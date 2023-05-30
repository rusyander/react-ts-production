import { Country, Currency } from 'shared/const/common';

export interface ProfileProps {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: ProfileProps;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
}
