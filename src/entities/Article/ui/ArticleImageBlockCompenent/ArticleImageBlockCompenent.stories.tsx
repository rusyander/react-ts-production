import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockCompenent } from './ArticleImageBlockCompenent';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ArticleImageBlockCompenent> = {
  title: 'entities/ArticleImageBlockCompenent',
  component: ArticleImageBlockCompenent,
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
type Story = StoryObj<typeof ArticleImageBlockCompenent>;

export const Primary: Story = {
  args: {},
};
