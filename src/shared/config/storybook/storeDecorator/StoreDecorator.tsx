import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ArticleDetailsReducer } from '@/entities/Article/testing';
import { AddCommentFormReducer } from '@/features/addCommentForm/testing';
import { ProfileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsPageReduser } from '@/pages/ArticleDetailsPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModalLoader';
import { LoginReducer } from '@/features/AuthByUserName/testing';

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
