import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileProps, ProfileSchema } from '../types/profile';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;
