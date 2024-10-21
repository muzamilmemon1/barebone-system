/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it('displays the correct title', () => {
    cy.get('h1').should('contain', 'Barebone Authentication System');
  });

  it('displays the Bank Alfalah logo', () => {
    cy.get('img[alt="Bank Alfalah Logo"]').should('be.visible');
  });

  it('displays the correct description', () => {
    cy.get('p').should('contain', 'This is a static website that simulates an authentication system');
  });

  it('has a working "Sign Up" button', () => {
    cy.get('a').contains('Sign Up').click();
    cy.url().should('include', '/signup');
  });

  it('has a working "Presentation" link', () => {
    cy.get('a').contains('Presentation').click();
    cy.url().should('include', '/presentation');
  });
});

describe('Navigation from Home Page', () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it('can navigate to Sign Up page', () => {
    cy.get('a').contains('Sign Up').click();
    cy.url().should('include', '/signup');
  });

  it('can navigate to Presentation page', () => {
    cy.get('a').contains('Presentation').click();
    cy.url().should('include', '/presentation');
    cy.get('h1').should('contain', 'Presentation: Embracing Modern Testing Tools');
  });

  it('can navigate back to Home from Presentation page', () => {
    cy.get('a').contains('Presentation').click();
    cy.url().should('include', '/presentation');
    cy.get('a').contains('Back to Home').click();
    cy.url().should('eq', `${APP_URL}/`);
  });
});
