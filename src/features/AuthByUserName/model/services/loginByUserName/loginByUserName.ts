import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import axios from 'axios';

interface LoginUsernameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
User,
LoginUsernameProps,
{ rejectValue: string }
>('login/loginByUserName', async ({ username, password }, thinkAPI) => {
  try {
    const response = await axios.post('http://localhost:9988/login', {
      username,
      password,
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thinkAPI.dispatch(UserActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return thinkAPI.rejectWithValue('error');
  }
});
