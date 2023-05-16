import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar);
    // render(<SidebarWithTranslation />);
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggle = screen.getByTestId('sidebat-toggle')

    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()

    fireEvent.click(toggle)
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  })
})
