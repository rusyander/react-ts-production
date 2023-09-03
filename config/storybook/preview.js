import { Preview, Story, addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: 'theme-twt', color: '#ffffff' },
                { name: 'dark', class: 'theme-fb', color: '#000000' },
                { name: 'orange', class: 'theme-fb', color: '#ffb005' },
            ],
        },
    },
};

export default preview;

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator);
