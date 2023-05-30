import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { BrowserRouter } from 'react-router-dom';
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/MainPage',
  component: ProfilePage,
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
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {};
export const Light: Story = {};
