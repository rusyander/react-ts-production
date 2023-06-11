import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticlesDetailsDataSelectors,
  getArticlesDetailsErrorSelectors,
  getArticlesDetailsLoadingSelectors,
} from './getArticlesDetailsSelectors';

describe('get article details', () => {
  test('should return getArticlesDetailsDataSelectors value', () => {
    const data = {
      id: '1',
      title: 'Javascript news',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: data,
      },
    };
    expect(getArticlesDetailsDataSelectors(state as StateSchema)).toEqual(data);
  });

  test('should return getArticlesDetailsErrorSelectors error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticlesDetailsErrorSelectors(state as StateSchema)).toEqual(
      undefined
    );
  });

  test('should return getArticlesDetailsLoadingSelectors loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticlesDetailsLoadingSelectors(state as StateSchema)).toEqual(
      true
    );
  });
});
