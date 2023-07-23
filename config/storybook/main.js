// import type { StorybookConfig } from '@storybook/react-webpack5';
const config = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',

    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },

    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
    {
      name: 'storybook-preset-inline-svg',
      options: {
        include: /source\/.+\.svg$/,
        svgInlineLoaderOptions: {
          removeTags: true,
          removingTags: ['circle'],
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
