import { selectors } from '../../../../support/selectors';

const locations = {
  index:
    'learn/back-end-development-and-apis/managing-packages-with-npm/' +
    'how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package'
};

const unhandledErrorMessage = 'Something is not quite right';
const runningOutput = '// running tests';
const finishedOutput = '// tests completed';

describe('Backend challenge', function () {
  it('renders', () => {
    cy.visit(locations.index);

    cy.title().should(
      'eq',
      'Managing Packages with NPM - How to Use package.json, the Core of Any' +
        ' Node.js Project or npm Package | Learn | freeCodeCamp.org'
    );
  });

  it('does not generate unhandled errors on submission', () => {
    cy.visit(locations.index);
    cy.get(selectors.tag.inputSolution)
      .type('https://example.com')
      .type('{enter}')
      .then(() => {
        cy.get(selectors.dataCy.outputText)
          .contains(runningOutput)
          .contains(finishedOutput);
        cy.contains(unhandledErrorMessage).should('not.exist');
      });
  });
});
