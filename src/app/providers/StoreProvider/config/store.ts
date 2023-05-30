/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { createReducerManager } from './reduserManaget';
import { ProfileReducer } from 'entities/Profile';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: UserReducer,

    // loginForm: LoginReducer,
  };

  const reducerManager = createReducerManager(rootReduser);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
