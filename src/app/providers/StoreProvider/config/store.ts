/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { CounterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/User';
import { createReducerManager } from './reduserManaget';
import { $api } from '@/shared/api/api';

import { rtkApi } from '@/shared/api/rtkApi';
import { UISliceReducer } from '@/features/Ui';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: UserReducer,
    ui: UISliceReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,

    // loginForm: LoginReducer,
    // articleDetails: ArticleDetailsReducer,
  };

  const reducerManager = createReducerManager(rootReduser);

  const extraArh: ThunkExtraArg = {
    api: $api,
    // navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: extraArh,
        },
      }).concat(rtkApi.middleware);
    },
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
