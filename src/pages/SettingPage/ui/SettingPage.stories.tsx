import type { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';

import SettingPage from './SettingPage';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof SettingPage> = {
    title: 'pages/SettingPage',
    component: SettingPage,
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
type Story = StoryObj<typeof SettingPage>;

export const Dark: Story = {};
export const Light: Story = {};
