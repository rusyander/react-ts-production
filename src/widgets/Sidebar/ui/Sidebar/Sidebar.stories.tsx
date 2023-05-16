import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'shared/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {}

export const dark: Story = {}
