import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
  form?: Profile;
  data?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
