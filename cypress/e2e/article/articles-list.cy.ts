describe('страница статей', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((user) => {
      cy.visit('articles');
    });
  });
  // it('загрузка нескольких статей', () => {
  //   cy.getByTestId('ArticleList').should('exist');
  //   cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  // });

  it('на стабых (фикстуры)', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'articles.json',
    });

    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
