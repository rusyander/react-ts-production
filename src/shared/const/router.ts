export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'article',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    SETTINGS = 'settings',

    Not_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticle_details = (id: string) => `/articles/${id}`;
export const getRouteArticle_create = () => '/articles/new';
export const getRouteArticle_edit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin_panel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

export const getRouteNot_found = () => '*';

export const AppRouteByPathPattern: Record<string, AppRoute> = {
    [getRouteMain()]: AppRoute.MAIN,
    [getRouteAbout()]: AppRoute.ABOUT,
    [getRouteProfile(':id')]: AppRoute.PROFILE,
    [getRouteArticles()]: AppRoute.ARTICLES,
    [getRouteArticle_details(':id')]: AppRoute.ARTICLE_DETAILS,
    [getRouteArticle_create()]: AppRoute.ARTICLE_CREATE,
    [getRouteArticle_edit(':id')]: AppRoute.ARTICLE_EDIT,
    [getRouteAdmin_panel()]: AppRoute.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoute.FORBIDDEN,
    [getRouteSettings()]: AppRoute.SETTINGS,
};
