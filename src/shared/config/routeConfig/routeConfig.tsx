import { AboutPage } from 'pages/AboutPage'
import { ErrorPage } from 'pages/ErrorPage'
import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  Not_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.Not_FOUND]: '*'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoute.Not_FOUND]: {
    path: RoutePath.not_found,
    element: <ErrorPage />
  }
}
