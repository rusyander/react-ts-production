// eslint-disable-next-line rustam-plugin-fsd-elsint/layer-imports
import type { FeatureFlag } from '@/shared/types/featureFlags';
import { rtkApi } from '@/shared/api/rtkApi';

interface UpdateFeaturesFlagsMutationArg {
    userId: string;
    features: Partial<FeatureFlag>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeaturesFlags: build.mutation<
            void,
            UpdateFeaturesFlagsMutationArg
        >({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
    overrideExisting: true,
});

export const updateFeaturesFlagsMutation =
    featureFlagsApi.endpoints.updateFeaturesFlags.initiate;
