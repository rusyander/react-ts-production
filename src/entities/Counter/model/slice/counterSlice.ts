import { CounterSchema } from '../types/CounterSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchema = {
  value: 0,
};

const CounterSlice = buildSlice({
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

export const {
  actions: CounterActions,
  reducer: CounterReducer,
  useAction: useCounterActions,
} = CounterSlice;

// const CounterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     dicrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { actions: CounterActions } = CounterSlice;
// export const { reducer: CounterReducer } = CounterSlice;

// buildSlice
