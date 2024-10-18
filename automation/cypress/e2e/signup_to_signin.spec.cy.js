describe("Sign Up Page to Sign In Page", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/signup`); // Directly visit the Sign Up page
  });

  it("should navigate from Sign Up page to Sign In page when clicking the 'Already registered? Sign In' link", () => {
    // Click the "Already registered? Sign In" link
    cy.contains("Already registered? Sign In").click();

    // Assert that the user is redirected to the Sign In page
    cy.url().should("include", "/signin");

    // Verify that the Sign In page is displayed
    cy.contains("Sign In").should("be.visible");

    // Assert that the necessary form elements are present
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]').contains("Sign In").should("be.visible");
  });
});
