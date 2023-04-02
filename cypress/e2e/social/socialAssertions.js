import { Then } from 'cypress-cucumber-preprocessor/steps';

const SOCIAL_MEDIA_SECTION = `.header--aside__social`;
const SOCIAL_MEDIA = `a[data-type="social"]`;

/* 
 * *** ASSERTION STEPS ***
 */

Then(/^the user sees the social media section$/, () => {
  cy.get(SOCIAL_MEDIA_SECTION).should('be.visible');
});

Then(/^the user sees the following social media options:$/, (dataTable) => {
  dataTable.rawTable.forEach(expectedMedia => {
    cy.get(SOCIAL_MEDIA).find('span').contains(String(expectedMedia)).should('be.visible');
  });
});
