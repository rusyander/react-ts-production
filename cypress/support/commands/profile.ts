import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const updateProfile = (newName: string, lastName: string) => {
  cy.getByTestId('EditableProfileCartHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(newName);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastName);
  cy.getByTestId('EditableProfileCartHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:9988/profile/${profileId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 123',
    },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 465,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(newName: string, lastName: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
