import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingPage } from '@/pages/SettingPage';
import {
    AppRoute,
    getRouteAbout,
    getRouteAdmin_panel,
    getRouteArticle_create,
    getRouteArticle_details,
    getRouteArticle_edit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNot_found,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoute.PROFILE]: {
        // path: RoutePath.profile,
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoute.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: getRouteArticle_details(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_CREATE]: {
        path: getRouteArticle_create(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_EDIT]: {
        path: getRouteArticle_edit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoute.ADMIN_PANEL]: {
        path: getRouteAdmin_panel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: ['ADMIN', 'MANAGER'],
    },
    [AppRoute.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoute.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingPage />,
    },
    [AppRoute.Not_FOUND]: {
        path: getRouteNot_found(),
        element: <ErrorPage />,
    },
};
