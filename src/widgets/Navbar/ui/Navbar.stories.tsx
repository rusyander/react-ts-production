import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { BrowserRouter } from 'react-router-dom';
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
    title: 'shared/Navbar',
    component: Navbar,
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
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const dark: Story = {};
