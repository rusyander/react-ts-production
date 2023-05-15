import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { BrowserRouter } from 'react-router-dom';
// import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],

    // decorators: [
    //     (Story) => (
    //         <BrowserRouter>
    //             <Story />
    //         </BrowserRouter>
    //     ),
    // ],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const PRIMARY: Story = {
    args: {
        className: 'lds-ellipsis',
    },
};
