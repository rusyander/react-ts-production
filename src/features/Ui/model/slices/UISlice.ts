import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: {},
};

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const UISliceReducer = UISlice.reducer;
export const UISliceActions = UISlice.actions;
