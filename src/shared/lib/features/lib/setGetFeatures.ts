import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlag } from '@/shared/types/featureFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featuresFlags: FeatureFlag = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

export function setFeaturesFlag(flags?: FeatureFlag) {
    if (flags) {
        featuresFlags = flags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag): boolean {
    return featuresFlags?.[flag] || false;
}
export function getAllFeatureFlags() {
    return featuresFlags;
}
