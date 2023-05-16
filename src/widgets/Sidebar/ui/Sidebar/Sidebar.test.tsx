import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<Sidebar />);
    const toggle = screen.getByTestId('sidebat-toggle');

    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
