import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockCompenent } from './ArticleImageBlockCompenent';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleBlockType } from 'entities/Article/model/types/article';

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
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  },
};
