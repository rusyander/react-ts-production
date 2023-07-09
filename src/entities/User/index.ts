export { UserReducer, UserActions } from './model/slice/UserSlice';
export type { UserSchema, User, UserRole } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInitedSelectors } from './model/selectors/getUserInitedSelectors/getUserInitedSelectors';

export {
  getUserRole,
  isUserAdmin,
  isUserManager,
  isUserUser,
} from './model/selectors/roleSelectors';
