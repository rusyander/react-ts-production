import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
