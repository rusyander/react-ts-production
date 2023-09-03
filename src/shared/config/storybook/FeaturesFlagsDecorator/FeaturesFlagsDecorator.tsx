import { setFeaturesFlag } from '@/shared/lib/features';
import { FeatureFlag } from '@/shared/types/featureFlags';
import { Story } from '@storybook/react';

export const FeaturesFlagsDecorator =
    (features: FeatureFlag) => (StoryComponent: Story) => {
        setFeaturesFlag(features);
        return <StoryComponent />;
    };
