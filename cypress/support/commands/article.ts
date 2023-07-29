import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';
import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Kotlin news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:9988/articles`,
      headers: {
        Authorization: 'Bearer 123',
      },
      body: article ?? defaultArticle,
    })
    .then((response) => response.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:9988/articles/${articleId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 123',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
