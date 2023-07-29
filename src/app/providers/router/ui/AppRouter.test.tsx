import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
  getRouteAbout,
  getRouteAdmin_panel,
  getRouteProfile,
} from '@/shared/const/router';
import { screen } from '@testing-library/react';

describe('AppRouter', () => {
  test('should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Cтраница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/sss',
    });
    const page = await screen.findByTestId('ErrorPage');
    expect(page).toBeInTheDocument();
  });

  test('Пользователь не авторизован, редирект на главную страницу', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой страци для авторизованого пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (нет нужной роли)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin_panel(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрещен (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin_panel(),
      initialState: {
        user: {
          _inited: true,
          authData: { roles: ['ADMIN'] },
        },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
