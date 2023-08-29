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

import NewMainIcon from '@/shared/assets/redesigned/home.svg';
import NewAboutIconn from '@/shared/assets/redesigned/Info.svg';
import NewProfileIcon from '@/shared/assets/redesigned/avatar.svg';
import NewArticleIcon from '@/shared/assets/redesigned/article.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sidebarItems: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => MainIcon,
                    on: () => NewMainIcon,
                }),
                text: 'Главная',
            },

            {
                path: getRouteAbout(),
                // Icon: AboutIcon,
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => AboutIcon,
                    on: () => NewAboutIconn,
                }),
                text: 'О сайте',
            },
        ];

        if (userAuthData) {
            sidebarItems.push(
                {
                    path: getRouteProfile(userAuthData?.id),
                    // Icon: ProfileIcon,
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => ProfileIcon,
                        on: () => NewProfileIcon,
                    }),
                    text: 'profile',
                    authOnly: true,
                },

                {
                    path: getRouteArticles(),
                    // Icon: ArticleIcon,
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => ArticleIcon,
                        on: () => NewArticleIcon,
                    }),
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarItems;
    },
);
