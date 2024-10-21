/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe('Not Found Page', () => {
    beforeEach(() => {
        cy.visit(`${APP_URL}/non-existent-page`, { failOnStatusCode: false });
    });

    it('displays the correct title', () => {
        cy.get('h2').should('contain', '404 - Page Not Found');
    });

    it('displays the correct error message', () => {
        cy.get('p').should('contain', 'Sorry, the page you are looking for does not exist.');
    });

    it('displays the Bank Alfalah logo', () => {
        cy.get('img[alt="Devkind Logo"]').should('be.visible');
    });

    it('has a working "Back to Home" button', () => {
        cy.get('a').contains('Back to Home').click();
        cy.url().should('eq', `${APP_URL}/`);
    });
});

describe('Navigation to Not Found Page', () => {
    it('shows Not Found page for non-existent routes', () => {
        cy.visit(`${APP_URL}/random-non-existent-route`, { failOnStatusCode: false });
        cy.get('h2').should('contain', '404 - Page Not Found');
    });

    it('preserves the URL of the non-existent page', () => {
        const nonExistentRoute = '/this-route-does-not-exist';
        cy.visit(`${APP_URL}${nonExistentRoute}`, { failOnStatusCode: false });
        cy.url().should('include', nonExistentRoute);
    });
});
