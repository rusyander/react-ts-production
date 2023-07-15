import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Counter.test', () => {
  test('render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const title = screen.getByTestId('counter-title');
    const increment = screen.getByTestId('increment');
    const dicrement = screen.getByTestId('dicrement');

    expect(title).toHaveTextContent('10');
    expect(increment).toBeInTheDocument();
    expect(dicrement).toBeInTheDocument();
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const title = screen.getByTestId('counter-title');
    const increment = screen.getByTestId('increment');

    expect(title).toHaveTextContent('10');
    fireEvent.click(increment);

    expect(title).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const title = screen.getByTestId('counter-title');
    const dicrement = screen.getByTestId('dicrement');

    expect(title).toHaveTextContent('10');
    fireEvent.click(dicrement);

    expect(title).toHaveTextContent('9');
  });
});
