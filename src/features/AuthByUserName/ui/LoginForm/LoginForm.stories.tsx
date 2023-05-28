import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ProvidersWrapper } from 'shared/config/storybook/storybookProvidersWrapper/ProvidersWrapper';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [ProvidersWrapper.decorators[0]],
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
