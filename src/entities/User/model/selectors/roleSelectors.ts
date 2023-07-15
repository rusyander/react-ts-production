import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserRole = (state: StateSchema) =>
  state.user.authData?.roles || [];

export const isUserAdmin = createSelector(getUserRole, (roles) =>
  Boolean(roles.includes('ADMIN'))
);
export const isUserManager = createSelector(getUserRole, (roles) =>
  Boolean(roles.includes('MANAGER'))
);
export const isUserUser = createSelector(getUserRole, (roles) =>
  Boolean(roles.includes('USER'))
);
