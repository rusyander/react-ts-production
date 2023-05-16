import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
  test('render button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('render button with themeButton clear', () => {
    render(<Button theme={ThemeButton.CLEAR}>Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('clear')
  })
})
