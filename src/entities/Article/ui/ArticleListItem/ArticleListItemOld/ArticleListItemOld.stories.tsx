import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItemOld } from './ArticleListItemOld';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ArticleListItemOld> = {
    title: 'shared/ArticleListItemOld',
    component: ArticleListItemOld,
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
type Story = StoryObj<typeof ArticleListItemOld>;

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
