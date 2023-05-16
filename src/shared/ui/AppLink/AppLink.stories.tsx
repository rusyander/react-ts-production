import type { Meta, StoryObj } from '@storybook/react'

import AppLink, { AppLinkTheme } from './AppLink'
import { BrowserRouter } from 'react-router-dom'
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
        <BrowserRouter>
                <Story />
            </BrowserRouter>
    )
  ],

  args: {
    to: '/'
  }
}

export default meta
type Story = StoryObj<typeof AppLink>

export const PRIMARY: Story = {
  args: {
    children: 'AppLink PRIMARY',
    theme: AppLinkTheme.PRIMARY
  }
}
export const RED: Story = {
  args: {
    children: 'AppLink RED',
    theme: AppLinkTheme.RED
  }
}
export const SECONDARY: Story = {
  args: {
    children: 'AppLink SECONDARY',
    theme: AppLinkTheme.SECONDARY
  }
}
