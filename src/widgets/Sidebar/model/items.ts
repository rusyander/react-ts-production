import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/Main.svg';
import AboutIcon from 'shared/assets/icons/About.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { To } from 'react-router-dom';

export interface SidebarItemType {
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: string | null;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },

  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },

  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile',
    authOnly: true,
  },

  {
    path: RoutePath.article,
    Icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true,
  },
];
