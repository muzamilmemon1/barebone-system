describe("Sign In to Forgot Password Page", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/signin`); // Directly visit the Sign In page
  });

  it("should navigate from Sign In page to Forgot Password page", () => {
    // Click on the 'Forgot password?' link
    cy.contains("Forgot password?").click();

    // Assert that the user is redirected to the Reset Password page
    cy.url().should("include", "/resetpassword");

    // Verify that the Reset Password page contains the email input field
    cy.get('input[name="email"]').should("be.visible");

    // Verify that the Reset Password page contains the Reset Password button
    cy.contains("Reset Password").should("be.visible");
  });
});
