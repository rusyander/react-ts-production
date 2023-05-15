import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const PRIMARY: Story = {
    args: {
        children: 'AppLink PRIMARY',
    },
};
