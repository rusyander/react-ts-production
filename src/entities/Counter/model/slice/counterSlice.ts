import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    dicrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: CounterActions } = CounterSlice;
export const { reducer: CounterReducer } = CounterSlice;
