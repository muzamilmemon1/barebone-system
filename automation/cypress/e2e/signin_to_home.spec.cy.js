describe("Sign In to Home Page", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/signin`); // Directly visit the Sign In page
  });

  it("should sign in successfully and navigate to Home page", () => {
    // Enter valid email and password
    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("password123");

    // Click the Sign In button
    cy.contains("Sign In").click();

    // Assert that the user is redirected to the Home page
    cy.url().should("include", "/home");

    // Verify that the Home page displays a welcome message or user-specific content
    cy.contains("Welcome").should("be.visible");
  });
});
