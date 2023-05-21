import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: '',
  error: null,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.password = action.payload.password;
        state.username = action.payload.userName;
      })
      //   .addCase(loginByUserName.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   });
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: LoginActions } = LoginSlice;
export const { reducer: LoginReducer } = LoginSlice;

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
