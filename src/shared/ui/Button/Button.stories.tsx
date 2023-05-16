import type { Meta, StoryObj } from '@storybook/react';

import { Button, SizeButton, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';

const theme = 'dark';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={`'app' ${Theme.DARK}`}>
        <Story />
      </div>
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
