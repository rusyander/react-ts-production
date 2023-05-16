// import { Story } from '@storybook/react';

// export const ThemeDecorator = (ComponentStory: () => Story) => {
//     return (
//         <div>
//             <ComponentStory />
//         </div>
//     );
// };

// .storybook/preview.tsx

import React from 'react'

import { type Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

// const theme: Theme = null;
const theme = 'dark'

const ThemeDecorator: Preview = {
  decorators: [
    (Story) => (
        <div className={`'app' ${theme}`}>
                <Story />
            </div>
    )
  ]
}

export default ThemeDecorator
