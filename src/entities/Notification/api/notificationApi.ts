import { rtkApi } from '@/shared/api/rtkApi';
export type { Notifications } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // @ts-ignore
    getNotifications: build.query<Notifications[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotificationList = notificationApi.useGetNotificationsQuery;
