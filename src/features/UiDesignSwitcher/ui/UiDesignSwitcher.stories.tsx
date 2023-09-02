import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
const meta: Meta<typeof UiDesignSwitcher> = {
    title: '***/UiDesignSwitcher',
    component: UiDesignSwitcher,
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
type Story = StoryObj<typeof UiDesignSwitcher>;
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
