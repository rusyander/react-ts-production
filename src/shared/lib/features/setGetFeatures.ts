import { FeatureFlag } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlag;

export function setFeaturesFlag(flags?: FeatureFlag) {
    if (flags) {
        featuresFlags = flags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag): boolean {
    return featuresFlags?.[flag] || false;
}
