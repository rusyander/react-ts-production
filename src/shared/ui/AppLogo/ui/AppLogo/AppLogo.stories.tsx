import type { Meta, StoryObj } from '@storybook/react';

import { AppLogo } from './AppLogo';

import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLogo> = {
    title: 'shared/AppLogo',
    component: AppLogo,
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
type Story = StoryObj<typeof AppLogo>;

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
