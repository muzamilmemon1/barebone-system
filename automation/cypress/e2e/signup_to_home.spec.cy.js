describe("Sign Up Page to Homepage", () => {
  it("should navigate to homepage after signing up", () => {
    cy.visit("/signup");

    // Fill in the sign-up form
    cy.get('input[name="username"]').type("newuser");
    cy.get('input[name="email"]').type("newuser@example.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get('input[name="confirmPassword"]').type("Password123");

    // Submit the form
    cy.get("form").submit();

    // Assert that the user is redirected to the homepage
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
