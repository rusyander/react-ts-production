import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreDecorator } from '@/shared/config/storybook/storeDecorator/StoreDecorator';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
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
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'text1',
        user: {
          id: '1',
          username: 'name1',
        },
      },
      {
        id: '2',
        text: 'tex2t',
        user: {
          id: '1',
          username: 'name2',
        },
      },
      {
        id: '3',
        text: 'text3',
        user: {
          id: '1',
          username: 'name3',
        },
      },
    ],
  },
};

Primary.decorators = [
  (Story) => (
    <ThemeProvider>
      <div className={`'app' ${Theme.DARK}`}>
        <Story />
      </div>
    </ThemeProvider>
  ),
  StoreDecorator({
    articleDetailsPage: {
      articleDetailsComments: {
        entities: {
          1: {
            id: '1',
            text: 'text',
            user: {
              id: '1',
              username: 'name',
            },
          },
          2: {
            id: '2',
            text: 'text',
            user: {
              id: '1',
              username: 'name',
            },
          },
        },
      },
    },
  }),
];
