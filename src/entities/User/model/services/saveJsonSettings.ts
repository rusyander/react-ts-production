import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async (newJsonSettings, { rejectWithValue, getState, dispatch }) => {
        const userData = getUserAuthData(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('error');
        }

        try {
            const response: any = await dispatch(
                setJsonSettingsMutation({
                    usersId: userData?.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                }),
            ).unwrap();

            if (response) {
                return rejectWithValue('error');
            }
            return response?.jsonSettings;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
