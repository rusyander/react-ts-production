import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    // decorators: [
    //   (Story) => (
    //     <div className={`'app' ${Theme.DARK}`}>
    //       <Story />
    //     </div>
    //   ),
    // ],

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
type Story = StoryObj<typeof Button>;

// export const Light: Story = {
//   args: {
//       placeholder: 'Наберите текст',
//       autoFocus: true,
//   },
// };
// Light.decorators = [
//   (Story) => (
//       <div className={`'app' ${Theme.LIGHT}`}>
//           <Story />
//       </div>
//   ),
// ];

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
Primary.decorators = [
    (Story) => (
        <div className={`'app' ${Theme.LIGHT}`}>
            <Story />
        </div>
    ),
];

export const Dark: Story = {
    args: {
        children: 'Text',
    },
};
Dark.decorators = [
    (Story) => (
        <div className={`'app' ${Theme.DARK}`}>
            <Story />
        </div>
    ),
];

export const Orange: Story = {
    args: {
        children: 'Text',
    },
};
Orange.decorators = [
    (Story) => (
        <div className={`'app' ${Theme.ORANGE}`}>
            <Story />
        </div>
    ),
];

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'm',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const Backgroundvariant: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const BACKGROUND_INVERTED: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};
export const Disabled: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        disabled: true,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'l',
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'm',
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'xl',
    },
};
