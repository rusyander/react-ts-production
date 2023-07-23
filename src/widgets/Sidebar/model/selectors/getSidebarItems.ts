import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import MainIcon from '@/shared/assets/icons/Main.svg';
import AboutIcon from '@/shared/assets/icons/About.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import {
  getRouteMain,
  getRouteAbout,
  getRouteProfile,
  getRouteArticles,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userAuthData) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная',
      },

      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userAuthData) {
      sidebarItems.push(
        {
          path: getRouteProfile(userAuthData?.id),
          Icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },

        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true,
        }
      );
    }
    return sidebarItems;
  }
);
