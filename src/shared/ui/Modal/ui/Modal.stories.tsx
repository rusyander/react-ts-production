import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { BrowserRouter } from 'react-router-dom';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],

  //   decorators: [
  //     (Story) => (
  //       <BrowserRouter>
  //         <Story />
  //       </BrowserRouter>
  //     ),
  //   ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam  quibusdam, reiciendis at aliquam facilis perspiciatis quam vitae, voluptatum itaque dicta repudiandae ducimus, quo aliquid placeat vero hic ut numquam ipsum.',
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam  quibusdam, reiciendis at aliquam facilis perspiciatis quam vitae, voluptatum itaque dicta repudiandae ducimus, quo aliquid placeat vero hic ut numquam ipsum.',
    isOpen: true,
  },
};
