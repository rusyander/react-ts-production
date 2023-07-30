import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commenstCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

// Cypress.Commands.add('login', login);
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commenstCommands);
Cypress.Commands.addAll(ratingCommands);

// Cypress.Commands.overwrite('intercept', () => {
//   const FIXTURE_MOD = process.env.FIXTURE_MOD;
//   if (FIXTURE_MOD === 'READ') {
//     readFixtures(fixtureName);
//   }
//   if (FIXTURE_MOD === 'WRITE') {
//     const fixtureName = req.METHOD + req.url + hash(req.body);
//     createFixture(fixtureName, req.body);
//   }
//   if (FIXTURE_MOD === 'API') {
//     readFixtures(fixtureName);
//   }
// });

export {};
