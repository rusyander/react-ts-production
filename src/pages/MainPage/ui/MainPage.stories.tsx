import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],

    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Dark: Story = {};
export const Light: Story = {};
