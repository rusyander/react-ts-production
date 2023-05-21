import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
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
type Story = StoryObj<typeof Text>;

export const Title: Story = {
  args: {
    title: 'title TITLE',
  },
};

export const Texts: Story = {
  args: {
    text: 'text TEXT',
  },
};

export const TitleDark: Story = {
  args: {
    title: 'title TITLE',
  },
};
TitleDark.decorators = [
  (Story) => (
    <div className={`'app_dark_theme' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];

export const TextsDark: Story = {
  args: {
    text: 'text TEXT',
  },
};
TextsDark.decorators = [
  (Story) => (
    <div className={`'app_dark_theme' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];

export const TextsPrimary: Story = {
  args: {
    text: 'text Primary',
    theme: TextTheme.PRIMARY,
  },
};
export const TextsError: Story = {
  args: {
    text: 'text Error',
    theme: TextTheme.ERROR,
  },
};
