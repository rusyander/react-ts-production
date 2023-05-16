import type { Meta, StoryObj } from '@storybook/react'

import { ErrorPage } from './ErrorPage'
import { BrowserRouter } from 'react-router-dom'
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ErrorPage> = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
        <BrowserRouter>
                <Story />
            </BrowserRouter>
    )
  ]
}

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Light: Story = {}

export const dark: Story = {}
