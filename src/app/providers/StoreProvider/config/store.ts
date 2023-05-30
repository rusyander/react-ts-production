/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { createReducerManager } from './reduserManaget';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: UserReducer,

    // loginForm: LoginReducer,
  };

  const reducerManager = createReducerManager(rootReduser);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
        immutableCheck: true,
        serializableCheck: true,
      });
    },
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
