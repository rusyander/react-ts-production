import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ArticleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { ProfileReducer } from 'entities/Profile';
import { LoginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModalLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: LoginReducer,
  profile: ProfileReducer,
  articleDetails: ArticleDetailsReducer,
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
