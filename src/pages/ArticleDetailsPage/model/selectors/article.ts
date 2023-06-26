import { createSelector } from '@reduxjs/toolkit';
import { getArticlesDetailsDataSelectors } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
  getArticlesDetailsDataSelectors,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user?.id === user.id;
  }
);
