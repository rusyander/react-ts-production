import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
