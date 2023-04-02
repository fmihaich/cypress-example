import { Given } from 'cypress-cucumber-preprocessor/steps';

/* ********************************************/
/* ******* PRE-CONDITION & ACTION STEPS *******
/* ********************************************/

Given(/^the user is on the "(.*)" page$/, (pageLink) => {
  cy.visit(pageLink);
});
