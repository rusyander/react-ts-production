import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Suspense } from 'react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ImageAvatar from '@/shared/assets/test/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
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
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'username',
      first: 'first',
      lastname: 'lastname',
      age: 20,
      city: 'city',
      //   avatar:
      //     'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      avatar: ImageAvatar,
      country: Country.Russia,
      currency: Currency.RUB,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

// export const Light: Story = {};
// Light.decorators = [
//   (Story) => (
//     <div className={`'app' ${Theme.LIGHT}`}>
//       <Story />
//     </div>
//   ),
// ];
