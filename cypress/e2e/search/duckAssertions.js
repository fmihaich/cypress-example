import { Then } from 'cypress-cucumber-preprocessor/steps';

const FOUND_LINKS = `[data-testid="result-title-a"]`;

Then(/^the user sees a list of at least "(\d+)" links$/, (linkCount) => {
  cy.get(FOUND_LINKS, { timeout: 10000 }).should('have.length.of.at.least', linkCount);
});
