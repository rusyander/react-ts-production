import { fireEvent, screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { ProfileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: Profile = {
  id: '1',
  first: 'firstname',
  lastname: 'lastname',
  age: 100,
  country: Country.Russia,
  city: 'city',
  currency: Currency.RUB,
  avatar: 'avatar',
  username: 'username',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'username',
        avatar: 'avatar',
      },
    },
  },
  asyncReducers: {
    profile: ProfileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('появляется кнопка созранить', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCartHeader.EditButton')
    );

    expect(
      screen.getByTestId('EditableProfileCartHeader.SaveButton')
    ).toBeInTheDocument();
  });

  test('при нажатии на отмуна то данные не меняются', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCartHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'name');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'name');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('name');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('name');

    await userEvent.click(
      screen.getByTestId('EditableProfileCartHeader.CancelButton')
    );
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
      'firstname'
    );
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('lastname');
  });

  //   test('Должна появиться ошибка', async () => {
  //     componentRender(<EditableProfileCard id="1" />, options);
  //     await userEvent.click(
  //       screen.getByTestId('EditableProfileCardHeader.EditButton')
  //     );

  //     await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

  //     await userEvent.click(
  //       screen.getByTestId('EditableProfileCardHeader.SaveButton')
  //     );

  //     expect(
  //       screen.getByTestId('EditableProfileCard.Error.Paragraph')
  //     ).toBeInTheDocument();
  //   });

  //   test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
  //     const mockPutReq = jest.spyOn($api, 'put');
  //     componentRender(<EditableProfileCard id="1" />, options);
  //     await userEvent.click(
  //       screen.getByTestId('EditableProfileCardHeader.EditButton')
  //     );

  //     await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

  //     await userEvent.click(
  //       screen.getByTestId('EditableProfileCardHeader.SaveButton')
  //     );

  //     expect(mockPutReq).toHaveBeenCalled();
  //   });
});
