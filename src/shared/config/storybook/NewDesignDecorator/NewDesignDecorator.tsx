import { Story } from '@storybook/react';
import {
    getAllFeatureFlags,
    setFeaturesFlag,
} from '@/shared/lib/features/lib/setGetFeatures';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeaturesFlag({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
