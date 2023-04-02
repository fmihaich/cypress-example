import { When } from 'cypress-cucumber-preprocessor/steps';

// Locators

const SOCIAL_MEDIA_ICON = `.header--aside__social > .header__clickable`;

/* ********************************************/
/* ******* PRE-CONDITION & ACTION STEPS *******
/* ********************************************/


When(/^the user expands the social media icon$/, () => {
  cy.get(SOCIAL_MEDIA_ICON).click();
});
