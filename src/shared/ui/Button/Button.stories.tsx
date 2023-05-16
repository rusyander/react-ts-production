import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const theme = 'dark'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  // decorators: [
  //     ThemeDecorator(Theme.DARK)
  // ]

  decorators: [
    (Story) => (
        <div className={`'app' ${Theme.DARK}`}>
                <Story />
            </div>
    )
  ]
  // argTypes: {
  //     backgroundColor: { control: 'color' },
  // },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
