import { type Story } from '@storybook/react';
// eslint-disable-next-line rustam-plugin-fsd-elsint/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
