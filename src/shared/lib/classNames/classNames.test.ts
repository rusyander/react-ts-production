import { classNames } from './classNames'

describe('classnemes', () => {
  test('with olnly first params', () => {
    expect(classNames('remove-btn')).toBe('remove-btn')
  })

  test('with additional class', () => {
    expect(classNames('remove-btn', {}, ['pdg'])).toBe('remove-btn pdg')
  })

  test('with all params', () => {
    expect(
      classNames(
        'remove-btn',
        { hovered: true, selectable: true, red: false },
        ['pdg']
      )
    ).toBe('remove-btn pdg hovered selectable')
  })
})
