import { When } from 'cypress-cucumber-preprocessor/steps';

// Locators
const SEARCH_TEXTBOX = `#search_form_input_homepage`;
const SEARCH_BUTTON = `#search_button_homepage`;

/* ********************************************/
/* ******* PRE-CONDITION & ACTION STEPS *******
/* ********************************************/

When(/^the user enters "(.*)" as seach keyword$/, (textToSearch) => {
  cy.get(SEARCH_TEXTBOX).clear().type(textToSearch);
  cy.get(SEARCH_BUTTON).click();
});
