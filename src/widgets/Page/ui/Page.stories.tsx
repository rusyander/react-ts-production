import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreDecorator } from '@/shared/config/storybook/storeDecorator/StoreDecorator';

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Suspense fallback={''}>
        <BrowserRouter>
          <StoreProvider>
            <ThemeProvider>
              <div className={`'app' ${Theme.DARK}`}>
                <Story />
              </div>
            </ThemeProvider>
          </StoreProvider>
        </BrowserRouter>
      </Suspense>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
  (Story) => (
    <ThemeProvider>
      <div className={`'app' ${Theme.DARK}`}>
        <Story />
      </div>
    </ThemeProvider>
  ),
  // StoreDecorator({
  //   articleDetails: {
  //     data: {},
  //   },
  // }),
];
