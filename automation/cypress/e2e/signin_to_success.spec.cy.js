describe("Sign In to Success Page", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/signin`); // Directly visit the Sign In page
  });

  it("should sign in successfully and navigate to the Success page", () => {
    // Fill in the email field
    cy.get('input[name="email"]').type("testuser@example.com");

    // Fill in the password field
    cy.get('input[name="password"]').type("Test@12345");

    // Click the Sign In button
    cy.get('button[type="submit"]').contains("Sign In").click();

    // Assert that the user is redirected to the Success page
    cy.url().should("include", "/success");

    // Verify the success message is displayed
    cy.contains("Signed in successfully!").should("be.visible");

    // Verify other elements on the Success page
    cy.contains("Welcome back!").should("be.visible");
    cy.contains("Go to Home").should("be.visible");
    cy.get('a[href="/"]').should("have.attr", "href", "/");
  });
});
