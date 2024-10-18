describe("Homepage to Sign Up", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(APP_URL); // Visit the homepage
  });

  it("should navigate to the Sign Up page when the 'Sign Up' button is clicked", () => {
    // Find the Sign Up button and click it
    cy.contains("Sign Up").click();

    // Assert that the URL has changed to the Sign Up page
    cy.url().should("include", "/signup");

    // Assert that the Sign Up form is visible
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");

    // Assert the presence of the 'Submit' button
    cy.get('button[type="submit"]')
      .should("be.visible")
      .and("contain", "Sign Up");
  });
});
