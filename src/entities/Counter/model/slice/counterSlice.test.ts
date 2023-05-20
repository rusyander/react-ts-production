import { CounterActions, CounterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, CounterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('dicrement', () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, CounterActions.dicrement())).toEqual({
      value: 9,
    });
  });

  test('work with empty state increment', () => {
    expect(CounterReducer(undefined, CounterActions.increment())).toEqual({
      value: 1,
    });
  });

  test('work with empty state dicrement', () => {
    expect(CounterReducer(undefined, CounterActions.dicrement())).toEqual({
      value: -1,
    });
  });
});
