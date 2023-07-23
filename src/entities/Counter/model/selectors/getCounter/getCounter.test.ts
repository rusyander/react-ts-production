import { StateSchema } from '@/app/providers/StoreProvider';

describe('get counter', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    // expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
