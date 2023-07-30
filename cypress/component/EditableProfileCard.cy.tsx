import { EditableProfileCard } from '../../src/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                if: '1',
              },
            },
          },
        }}
      >
        <EditableProfileCard id={'1'} />
      </TestProvider>
    );
  });
});
