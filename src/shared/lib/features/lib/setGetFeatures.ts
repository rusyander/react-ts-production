import { FeatureFlag } from '@/shared/types/featureFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featuresFlags: FeatureFlag = {};

export function setFeaturesFlag(flags?: FeatureFlag) {
    if (flags) {
        featuresFlags = flags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag): boolean {
    return featuresFlags?.[flag] || false;
    // return featuresFlags?.[flag] ?? true;
}
export function getAllFeatureFlags() {
    return featuresFlags;
}
