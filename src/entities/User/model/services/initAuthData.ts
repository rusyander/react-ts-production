import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';

export const initAuth = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuth',
    async (_, { rejectWithValue, dispatch }) => {
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('error');
        }
        try {
            const response: any = await dispatch(
                getUserDataByIdQuery(userId ?? ''),
            ).unwrap();

            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                response.features?.isAppRedesigned ? 'new' : 'old',
            );

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
