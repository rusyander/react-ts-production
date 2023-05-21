import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // dicrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
