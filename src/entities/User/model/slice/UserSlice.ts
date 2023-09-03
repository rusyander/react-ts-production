import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { setFeaturesFlag } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuth } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
    authData: undefined,
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                action.payload.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         const users = JSON.parse(user);
        //         state.authData = users;
        //         setFeaturesFlag(users?.features);
        //     }
        //     state._inited = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, action: PayloadAction<JsonSettings>) => {
                    console.log('sssss', state?.authData);
                    if (state?.authData) {
                        state.authData.jsonSettings = action.payload;
                    }
                },
            )
            .addCase(saveJsonSettings.rejected, (state) => {
                state._inited = true;
            })
            .addCase(
                initAuth.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.authData = action.payload;
                    setFeaturesFlag(action.payload?.features);
                    state._inited = true;
                },
            )
            .addCase(initAuth.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
