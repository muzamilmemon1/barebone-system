/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe('Presentation Page', () => {
    beforeEach(() => {
        cy.visit(`${APP_URL}/presentation`);
    });

    it('displays the correct title', () => {
        cy.get('h1').should('contain', 'Presentation: Embracing Modern Testing Tools');
    });

    it('displays the correct introduction text', () => {
        cy.get('p.text-lg').should('contain', "Hi everyone, this is the demo I have created");
    });

    it('displays the correct number of Card components', () => {
        cy.get('.grid > a').should('have.length', 5); // Assuming there are 5 topics
    });

    it('displays Card components with correct content', () => {
        const expectedTitles = [
            "Cypress: A Modern Testing Framework for Full-Stack Automation",
            "Other Testing Tools Overview",
            "Agile and DevOps Integration",
            "Modern Testing in Digital Transformation",
            "Compliance with Regulations and Data Privacy"
        ];

        cy.get('.grid > a').each(($card, index) => {
            cy.wrap($card).within(() => {
                cy.get('h5').should('contain', expectedTitles[index]);
                cy.get('p').should('exist');
            });
        });
    });

    it('has a "Back to Home" button', () => {
        cy.contains('a', 'Back to Home')
            .should('have.attr', 'href', '/')
            .and('have.class', 'bg-indigo-600')
            .and('have.class', 'text-white');
    });

    it('has correct layout classes', () => {
        cy.get('.grid')
            .should('have.class', 'grid-cols-1')
            .and('have.class', 'md:grid-cols-2')
            .and('have.class', 'lg:grid-cols-3');
    });
});

describe('Navigation to Presentation Page', () => {
    it('can navigate from Home to Presentation', () => {
        cy.visit('/')
        cy.get('a').contains('Presentation').click()
        cy.url().should('include', '/presentation')
        cy.get('h1').should('contain', 'Presentation: Embracing Modern Testing Tools')
    })
})
