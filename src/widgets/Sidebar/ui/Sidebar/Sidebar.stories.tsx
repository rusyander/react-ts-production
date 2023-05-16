import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Sidebar> = {
  title: 'shared/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {};
