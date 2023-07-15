import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { Suspense } from 'react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ImageAvatar from '@/shared/assets/test/avatar.jpg';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],

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
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  // args: {
  //   profile: {
  //     form: {
  //       username: 'username',
  //       first: 'first',
  //       lastname: 'lastname',
  //       age: 20,
  //       city: 'city',
  //       //   avatar:
  //       //     'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  //       avatar: ImageAvatar,
  //       country: Country.Russia,
  //       currency: Currency.RUB,
  //     },
  //   },
  // },
};
Normal.decorators = [
  (Story) => (
    <div className={`'app' ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];

// export const Light: Story = {};
// Light.decorators = [
//   (Story) => (
//     <div className={`'app' ${Theme.LIGHT}`}>
//       <Story />
//     </div>
//   ),
// ];
