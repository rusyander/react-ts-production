import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Suspense fallback={''}>
        <BrowserRouter>
          <StoreProvider>
            <ThemeProvider>
              <Story />
            </ThemeProvider>
          </StoreProvider>
        </BrowserRouter>
      </Suspense>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {};
Dark.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];

export const Light: Story = {};
Light.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.LIGHT}`}>
      <Story />
    </div>
  ),
];
