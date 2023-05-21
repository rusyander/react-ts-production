import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: 'Наберите текст',
    autoFocus: true,
  },
};
Light.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.LIGHT}`}>
      <Story />
    </div>
  ),
];

export const Dark: Story = {
  args: {
    placeholder: 'Наберите текст',
    autoFocus: true,
  },
};
Dark.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];
