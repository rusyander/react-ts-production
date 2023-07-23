import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoute, RoutePath } from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoute, AppRouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoute.PROFILE]: {
    // path: RoutePath.profile,
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoute.ARTICLES]: {
    path: RoutePath.article,
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoute.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['ADMIN', 'MANAGER'],
  },
  [AppRoute.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  [AppRoute.Not_FOUND]: {
    path: RoutePath.not_found,
    element: <ErrorPage />,
  },
};
