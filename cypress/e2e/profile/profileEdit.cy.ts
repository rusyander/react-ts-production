let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`profile/${user.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Успешная загрузка профиля', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
  });
  it('Редактирование профиля', () => {
    const newName = 'newName';
    const lastName = 'lastName';
    cy.updateProfile('newName', 'lastName');
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', lastName);
  });
});
