import { FeatureFlag } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlag;
    on?: () => T;
    off?: () => T;
}

export function toggleFeatures<T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        if (on) {
            return on?.();
        }
    }
    if (off) {
        return off?.();
    }
    return '' as unknown as T;
}
