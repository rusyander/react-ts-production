import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUserName';

export function createReduxStore(initialState?: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
    loginForm: LoginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
