import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReduserList = {
  [name in StateSchemaKey]?: Reducer;
};

const list: ReduserList = {
  // loginForm: LoginReducer,
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModalLoaderProps {
  reducers: ReduserList;
  removeAfterUnmaunt?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModalLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmaunt } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@Init- ${name} reduser` });
    });

    return () => {
      if (removeAfterUnmaunt) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@Destroy- ${name} reduser` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
