let currentArticleId = '';

describe('страница статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  // afterEach(() => {
  //   cy.removeArticle(currentArticleId);
  // });
  // it('видит содержимое статьи', () => {
  //   cy.getByTestId('ArticleDetails.Info').should('exist');
  // });
  // it('список рекомендаций', () => {
  //   cy.getByTestId('ArticleRecommendationsList').should('exist');
  // });
  // it('остовляет коментарий', () => {
  //   cy.getByTestId('ArticleDetails.Info').should('exist');
  //   cy.getByTestId('AddCommentForm').scrollIntoView();
  //   cy.addComment('text');
  //   cy.getByTestId('CommentList').should('have.length', 1);
  // });

  // it('ставить оценку', () => {
  //   cy.getByTestId('ArticleDetails.Info').should('exist');
  //   cy.getByTestId('RatingCard').scrollIntoView();
  //   cy.setRate(5, 'feedback');
  //   cy.get('[data-selected=true]').should('have.length', 5);
  // });

  it('ставить оценку на стабых (фикстуры)', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'articles-details.json',
    });
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
