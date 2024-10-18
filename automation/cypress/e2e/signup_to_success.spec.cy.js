describe("Sign Up Page to Success Page", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/signup`); // Directly visit the Sign Up page
  });

  it("should sign up successfully and redirect to the Success page", () => {
    // Fill in the Sign Up form
    cy.get('input[name="username"]').type("newUser");
    cy.get('input[name="email"]').type("newuser@example.com");
    cy.get('input[name="password"]').type("password123");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to the Success page
    cy.url().should("include", "/success");

    // Assert that the Success message is visible
    cy.contains("Signed up successfully!").should("be.visible");

    // Assert that the link to go back to the homepage is present
    cy.contains("Go to Home").should("be.visible");
  });
});
