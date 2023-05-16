import type { Meta, StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'
import { BrowserRouter } from 'react-router-dom'
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
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
type Story = StoryObj<typeof AboutPage>

export const Dark: Story = {}
export const Light: Story = {}
