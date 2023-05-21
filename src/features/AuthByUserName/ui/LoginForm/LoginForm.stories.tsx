import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={`'app' ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};
Light.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.LIGHT}`}>
      <Story />
    </div>
  ),
];

export const Dark: Story = {};
Dark.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];
