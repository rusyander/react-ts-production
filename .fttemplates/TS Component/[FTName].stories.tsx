

import type { Meta, StoryObj } from '@storybook/react';

import { [FTName] } from './[FTName]';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof [FTName]> = {
   title: 'shared/[FTName]',
   component: [FTName],
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
type Story = StoryObj<typeof [FTName]>;

export const Primary: Story = {
   args:{}
};
