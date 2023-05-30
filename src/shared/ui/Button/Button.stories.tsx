import type { Meta, StoryObj } from '@storybook/react';

import { Button, SizeButton, ThemeButton } from './Button';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
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

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERT,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BACKGROUND_INVERTED: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
  },
};
