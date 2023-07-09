module.exports = (
  layer,
  componentName
) => `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator';

const meta: Meta<typeof ${componentName} > = {
    title: '${layer}/${componentName}',
   component: ${componentName} ,
  tags: ['autodocs'],


  decorators: [
    (Story) => (
      <Suspense fallback={''}>
        <BrowserRouter>
          <StoreProvider>
            <ThemeProvider>
             <div className={'app'}>
                <Story />
              </div>
            </ThemeProvider>
          </StoreProvider>
        </BrowserRouter>
      </Suspense>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ${componentName} >;

export const Primary: Story = {
   args:{}
};


Primary.decorators = [
  (Story) => (
    <ThemeProvider>
      <div className={'app'}>
        <Story />
      </div>
    </ThemeProvider>
  ),
  // StoreDecorator({
  //   articleDetails: {
  //     data: {},
  //   },
  // }),
]`;

// <div className={`'app' ${Theme.DARK}`}>
