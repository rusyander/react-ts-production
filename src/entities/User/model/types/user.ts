import { FeatureFlag } from '@/shared/types/featureFlags';
import { JsonSettings } from './jsonSettings';

export type UserRole = 'ADMIN' | 'USER' | 'MANAGER';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlag;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
