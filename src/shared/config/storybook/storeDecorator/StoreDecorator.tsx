import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ArticleDetailsReducer } from '@/entities/Article';
import { LoginReducer } from '@/features/AuthByUserName';
import { AddCommentFormReducer } from '@/features/addCommentForm';
import { ProfileReducer } from '@/features/editableProfileCard';
import { articleDetailsPageReduser } from '@/pages/ArticleDetailsPage';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: LoginReducer,
  profile: ProfileReducer,
  articleDetails: ArticleDetailsReducer,
  addCommentForm: AddCommentFormReducer,
  articleDetailsPage: articleDetailsPageReduser,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
