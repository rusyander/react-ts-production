import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { JsonSettings } from '../model/types/jsonSettings';

interface SetJsonSettingsProps {
    usersId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsProps>({
            query: ({ jsonSettings, usersId }) => ({
                url: `/users/${usersId}`,
                method: 'PATCH',
                body: jsonSettings,
            }),
        }),

        getUserDataById: build.query<User, string>({
            query: (usersId) => ({
                url: `/users/${usersId}`,
                method: 'GET',
            }),
        }),
    }),
});

// export const useNotificationList = userApi.useSetJsonSettingsMutation;

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
