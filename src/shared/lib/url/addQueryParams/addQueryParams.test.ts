import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('should add one query params to the url', () => {
    // @ts-ignore
    const params = getQueryParams({ test: 'value' });
    expect(params).toBe('?test=value');
  });

  test('should add two query params to the url', () => {
    // @ts-ignore
    const params = getQueryParams({ test: 'value', test2: 'value2' });
    expect(params).toBe('?test=value&test2=value2');
  });

  test('should add tree query params to the url', () => {
    // @ts-ignore
    const params = getQueryParams({
      test: 'value',
      test2: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
